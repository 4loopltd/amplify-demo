import { Component, OnInit } from '@angular/core';
import {VerificationDetails} from "../../../models/verification-details";
import {AcceptFormDataService} from "../../../services/accept-form-data.service";
import {APIService} from "../../../API.service";

@Component({
  selector: 'app-invite-pyi',
  templateUrl: './invite-pyi.component.html',
  styleUrls: ['./invite-pyi.component.sass']
})
export class InvitePYIComponent implements OnInit {

  verificationDetails: VerificationDetails;

  constructor(private formDataService: AcceptFormDataService, private api: APIService) {
    this.verificationDetails = formDataService.verificationDetails;
  }

  ngOnInit(): void {
    let invite = this.verificationDetails.invite;
    if(!invite){
      console.log("Invalid Invite!")
      return;
    }

    this.api.UpdateInvite({id:invite.id, statusInvite: 'ACCEPTED'}).then(event =>{
      console.log("Invite updated");
    })
  }

  submit() {
    this.formDataService.reset();
  }

}
