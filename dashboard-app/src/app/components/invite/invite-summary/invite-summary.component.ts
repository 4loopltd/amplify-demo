import { Component, OnInit } from '@angular/core';
import {InviteFormDataService} from '../../../services/invite-form-data.service';
import {ChecksDetails} from '../../../models/checks-details';
import {EmployeeDetails} from "../../../models/employee-details";

@Component({
  selector: 'app-invite-summary',
  templateUrl: './invite-summary.component.html',
  styleUrls: ['./invite-summary.component.sass']
})
export class InviteSummaryComponent implements OnInit {

  employeeDetails: EmployeeDetails;
  checkDetails: ChecksDetails;

  constructor(public formDataService: InviteFormDataService) {
    this.employeeDetails = formDataService.employeeDetails;
    this.checkDetails = formDataService.checksDetails;
  }

  ngOnInit(): void {
  }

  submit() {
    this.formDataService.postData();
  }


}
