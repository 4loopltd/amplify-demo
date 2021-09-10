import { Injectable } from '@angular/core';
import {VerificationDetails} from "../models/verification-details";
import {EmployeeDetails} from "../models/employee-details";
import {APIService} from "../API.service";
import {Invite} from "../../types/Invite";

@Injectable({
  providedIn: 'root'
})
export class AcceptFormDataService {

  verificationDetails: VerificationDetails;
  //employeeDetails: EmployeeDetails;

  constructor() {
    this.verificationDetails = new VerificationDetails();
    //this.employeeDetails = new EmployeeDetails();
  }

  reset() {
    this.verificationDetails = new VerificationDetails();
  }
}
