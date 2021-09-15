// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
AWS.config.update({region: 'eu-west-2'});

exports.handler = event => {

  for (const streamedItem of event.Records) {
    if(streamedItem.eventName === 'MODIFY'){
      const oldOTP = streamedItem.dynamodb.OldImage.otp.S;
      const candidateOTP = streamedItem.dynamodb.NewImage.otp.S;
      const candidatePhone = streamedItem.dynamodb.NewImage.phone.S;

      if(!candidateOTP || candidateOTP === oldOTP){
        continue;
      }

      if(!candidatePhone){
        continue;
      }

      var paramsSMS = {
        Message: candidateOTP,
        PhoneNumber: '+44' + candidatePhone.replace(/^0+/, ''),
        MessageAttributes: {
          'AWS.SNS.SMS.SenderID': {
            'DataType': 'String',
            'StringValue': 'subject'
          }
        }
      };

      var publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'}).publish(paramsSMS).promise();

      publishTextPromise.then(
        function (data) {
          console.log("SMS Message id: " + data.MessageId);
        }).catch(
        function (err) {
          console.error(err, err.stack);
        });

      continue;
    }

    if (streamedItem.eventName !== 'INSERT') {
      continue;
    }

    //pull off items from stream
    const candidateName = streamedItem.dynamodb.NewImage.firstName.S;
    const candidateEmail = streamedItem.dynamodb.NewImage.email.S;
    const candidateUID = streamedItem.dynamodb.NewImage.uid.S;
    const updated = streamedItem.dynamodb.NewImage.updatedAt.S;

    if (!candidateEmail.match(/^[^@]+@[^@]+$/)) {
      console.log('Not sending: invalid email address', candidateEmail);
      continue;
    }

    // Provide My Identity
    // Care Worker Registration Page
    let futureTime = new Date(updated).getTime() + (72 * 60 * 60 * 1000);
    let expires = new Date(futureTime).toUTCString();
    console.log("Expires: " + expires);

    // Create sendEmail params - templates todo...
    var params = {
      Destination: { /* required */
        ToAddresses: [candidateEmail]
      },
      Message: { /* required */
        Body: { /* required */
          Html: {
            Charset: 'UTF-8',
            Data: '<!DOCTYPE html><html><body>' +
              '<h1>Provide My Identity Invitation</h1>' +
              "<p>Please complete the " +
              "<a href='http://localhost:4202?id=" + candidateUID + "'>Worker Registration</a></p>" +
              '<p>This invite is valid until ' + expires + '</p>' +
              '<p>Thanks, [Support Team Link]</p>' +
              '</body></html>'
          },
          Text: {
            Charset: 'UTF-8',
            Data: 'Please complete the Worker Registration at: http://localhost:4202?id=' + candidateUID +
              ' This invite is valid until ' + expires
          }
        },
        Subject: {
          Charset: 'UTF-8',
          Data: 'Invite for ' + candidateName + ' from lambda'
        }
      },
      Source: 'phil@4loop.co.uk' /* required & needs to be verified in SES*/
    };

    console.log("Sending to: " + candidateEmail);

    // Create the promise and SES service object
    var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();

    // Handle promise's fulfilled/rejected states
    sendPromise.then(
      function (data) {
        console.log("Email Message id: " + data.MessageId);
      }).catch(
      function (err) {
        console.error(err, err.stack);
      });

  }

}
