import { Component, OnInit } from '@angular/core';
import {AcceptFormDataService} from "../../../services/accept-form-data.service";
import {APIService} from "../../../API.service";
import {VerificationDetails} from "../../../models/verification-details";
import {Invite} from "../../../../types/Invite";

@Component({
  selector: 'app-invite-accepted',
  templateUrl: './invite-accepted.component.html',
  styleUrls: ['./invite-accepted.component.sass']
})
export class InviteAcceptedComponent implements OnInit {


  constructor() {}

  ngOnInit(): void {
  }

}
