// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
AWS.config.update({region: 'eu-west-2'});

exports.handler = event => {

  for (const streamedItem of event.Records) {
    if (streamedItem.eventName !== 'INSERT') {
      continue;
    }

    //pull off items from stream
    const candidateName = streamedItem.dynamodb.NewImage.firstName.S;
    const candidateEmail = streamedItem.dynamodb.NewImage.email.S;
    const candidateUID = streamedItem.dynamodb.NewImage.uid.S;

    if (!candidateEmail.match(/^[^@]+@[^@]+$/)) {
      console.log('Not sending: invalid email address', candidateEmail);
      continue;
    }

    // Create sendEmail params
    var params = {
      Destination: { /* required */
        ToAddresses: [candidateEmail]
      },
      Message: { /* required */
        Body: { /* required */
          Html: {
            Charset: 'UTF-8',
            Data: 'UID: ' + candidateUID + '.'
          },
          Text: {
            Charset: 'UTF-8',
            Data: 'UID: ' + candidateUID + '.'
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


    var paramsSMS = {
      Message: 'TEXT_MESSAGE',
      PhoneNumber: '+447576520820',
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

  }

}
