import { Component, OnInit } from '@angular/core';
import {VerificationDetails} from "../../../models/verification-details";
import {AcceptFormDataService} from "../../../services/accept-form-data.service";

@Component({
  selector: 'app-invite-pyi',
  templateUrl: './invite-pyi.component.html',
  styleUrls: ['./invite-pyi.component.sass']
})
export class InvitePYIComponent implements OnInit {

  constructor(private formDataService: AcceptFormDataService) {
  }

  ngOnInit(): void {
  }

  submit() {
    this.formDataService.reset();
  }

}
