import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AcceptFormDataService} from "../../../services/accept-form-data.service";
import {VerificationDetails} from "../../../models/verification-details";
import {APIService} from "../../../API.service";
import {Invite} from "../../../../types/Invite";


@Component({
  selector: 'app-invite-landing',
  templateUrl: './invite-landing.component.html',
  styleUrls: ['./invite-landing.component.sass']
})
export class InviteLandingComponent implements OnInit {

  verificationDetails: VerificationDetails;

  constructor(private route: ActivatedRoute, private formDataService: AcceptFormDataService, private api: APIService) {
    this.verificationDetails = formDataService.verificationDetails;
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      let id = params['id'];
      if(id){
        // store the link param
        this.verificationDetails.uid = id;
        // get the matching invite
        this.queryInvite(id);
      }
    });
  }
  queryInvite(uid: string) {
    console.log("Looking for: " + uid);
    this.api.InviteByUID(uid).then(event => {
      if (event) {
        let items = event.items;
        if (items && items.length > 0) {
          this.verificationDetails.invite = items[0] as Invite;
          //console.log(JSON.stringify(this.verificationDetails.invite));
        } else {
          console.log("Invite not found: " + uid);
        }
      }
    })
  }

}
