import { Component, OnInit } from '@angular/core';
import {EmployeeDetails} from '../../../models/employee-details';
import {InviteFormDataService} from '../../../services/invite-form-data.service';

@Component({
  selector: 'app-invite-employee',
  templateUrl: './invite-employee.component.html',
  styleUrls: ['./invite-employee.component.sass']
})
export class InviteEmployeeComponent implements OnInit {

  employeeDetails: EmployeeDetails;

  constructor(private formDataService: InviteFormDataService) {
    this.employeeDetails = formDataService.employeeDetails;
  }

  ngOnInit(): void {
  }

}
