import {Component, OnInit} from '@angular/core';
import {AcceptFormDataService} from "../../../services/accept-form-data.service";
import {EmployeeDetails} from "../../../models/employee-details";
import {VerificationDetails} from "../../../models/verification-details";

@Component({
  selector: 'app-invite-verify',
  templateUrl: './invite-verify.component.html',
  styleUrls: ['./invite-verify.component.sass']
})
export class InviteVerifyComponent implements OnInit {

  verificationDetails: VerificationDetails;
  //employeeDetails: EmployeeDetails;

  constructor(private formDataService: AcceptFormDataService) {
    //let futureTime = new Date().getTime() + (72 * 60 * 60 * 1000);

    this.verificationDetails = formDataService.verificationDetails;
    //this.employeeDetails = formDataService.employeeDetails;
  }

  ngOnInit(): void {
    // get salt
    // generate otp

    // fake it till you make it
    this.verificationDetails.salt = 'gLJPpe';
    this.verificationDetails.otpGenerated = '12345';
  }

  resendOTP() {
    // verify the otp

    // enable next button

    console.log(JSON.stringify(this.verificationDetails));
    //console.log(JSON.stringify(this.employeeDetails));

    console.log("Next: Valid UID " + this.verificationDetails.isValidUID() + ', Valid OTP ' + this.verificationDetails.isValidOTP());
  }
}
