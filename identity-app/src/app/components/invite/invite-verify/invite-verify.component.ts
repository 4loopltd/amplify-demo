import {Component, OnInit} from '@angular/core';
import {AcceptFormDataService} from "../../../services/accept-form-data.service";
import {VerificationDetails} from "../../../models/verification-details";
import {APIService} from "../../../API.service";
import {Invite} from "../../../../types/Invite";

@Component({
  selector: 'app-invite-verify',
  templateUrl: './invite-verify.component.html',
  styleUrls: ['./invite-verify.component.sass']
})
export class InviteVerifyComponent implements OnInit {

  verificationDetails: VerificationDetails;

  //employeeDetails: EmployeeDetails;

  constructor(private formDataService: AcceptFormDataService, private api: APIService) {
    //let futureTime = new Date().getTime() + (72 * 60 * 60 * 1000);

    this.verificationDetails = formDataService.verificationDetails;
    //this.employeeDetails = formDataService.employeeDetails;
  }

  ngOnInit(): void {
    // get salt
    // generate otp
    this.queryInvite(this.verificationDetails.uid);

    // fake it till you make it
    this.verificationDetails.otpGenerated = '12345';

  }

  resendOTP() {
    // verify the otp

    // enable next button

    console.log(JSON.stringify(this.verificationDetails));
    //console.log(JSON.stringify(this.employeeDetails));

    console.log("Next: Valid UID " + this.verificationDetails.isValidUID() + ', Valid OTP ' + this.verificationDetails.isValidOTP());
  }

  queryInvite(uid: string) {
    console.log("Looking for: " + uid);
    this.api.InviteByUID(uid).then(event => {
      if (event) {
        let items = event.items;
        console.log(JSON.stringify(items));
        if (items && items.length > 0) {
          this.verificationDetails.invite = items[0] as Invite;
          console.log(JSON.stringify(this.verificationDetails.invite));
        } else {
          console.log("Invite not found: " + uid);
        }
      }
    })
  }
}
