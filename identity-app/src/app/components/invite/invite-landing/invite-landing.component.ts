import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AcceptFormDataService} from "../../../services/accept-form-data.service";
import {VerificationDetails} from "../../../models/verification-details";


@Component({
  selector: 'app-invite-landing',
  templateUrl: './invite-landing.component.html',
  styleUrls: ['./invite-landing.component.sass']
})
export class InviteLandingComponent implements OnInit {

  verificationDetails: VerificationDetails;

  constructor(private route: ActivatedRoute, private formDataService: AcceptFormDataService) {
    this.verificationDetails = formDataService.verificationDetails;
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      let id = params['id'];
      if(id){
        this.verificationDetails.uid = id;
      }
    });
  }

}
