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

  constructor(private formDataService: AcceptFormDataService, private api: APIService) {
    //let futureTime = new Date().getTime() + (72 * 60 * 60 * 1000);
    this.verificationDetails = formDataService.verificationDetails;
  }

  ngOnInit(): void {
    // send initial OTP
    this.sendOTP();
  }

  sendOTP() {
    let invite = this.verificationDetails.invite;
    if(!invite){
      console.log("Invalid Invite!")
      return;
    }

    invite.otp = this.makeOTP(4);

    this.api.UpdateInvite({id:invite.id, otp: invite.otp}).then(event =>{
      console.log("Invite updated");
    })

    console.log("OTP sent");
  }

  makeOTP(length: number) {
    let result = '';
    const characters = '0123456789';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
}
