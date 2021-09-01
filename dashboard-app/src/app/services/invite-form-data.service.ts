import {Injectable} from '@angular/core';
import {ChecksDetails} from '../models/checks-details';
import {EmployeeDetails} from '../models/employee-details';
import {APIService} from "../API.service";
import {Invite} from "../../types/Invite";
import {Md5} from "md5-typescript";

@Injectable({
  providedIn: 'root'
})
export class InviteFormDataService {

  checksDetails: ChecksDetails;
  employeeDetails: EmployeeDetails;

  constructor(private api: APIService) {
    this.checksDetails = new ChecksDetails();
    this.employeeDetails = new EmployeeDetails();
  }

  postData() {
    let combinedData = {
      checksDetails: this.checksDetails,
      employeeDetails: this.employeeDetails
    };

    // Sanitise data for hashing
    let usrData = '';
    usrData = usrData.concat(this.employeeDetails.firstName.trim().toLowerCase());
    usrData = usrData.concat(this.employeeDetails.lastName.trim().toLowerCase());
    usrData = usrData.concat(this.employeeDetails.email.trim().toLowerCase());

    // Save invite
    let invite: Invite = {
      uid: Md5.init(usrData),
      firstName: this.employeeDetails.firstName,
      middleName: this.employeeDetails.middleName,
      lastName: this.employeeDetails.lastName,
      dob: this.employeeDetails.dob,
      email: this.employeeDetails.email,
      role: this.employeeDetails.role,
      odsCode: this.employeeDetails.odsCode,
      status: "CREATED"
    };

    // Save Invite
    this.api.CreateInvite(invite).then(event => {
      console.log("Invite created");
      this.checksDetails = new ChecksDetails();
      this.employeeDetails = new EmployeeDetails();

      // form reset .....
    })

    // http post to backend server... send email...

    console.log(combinedData);
  }
}
