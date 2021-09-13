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
    console.log("Usr: " + usrData);

    // sudo salt - look at using iterations to do properly (cipher)
    const salt = this.makeSalt(6);
    console.log("Salt: " + salt);

    // Save invite
    let invite: Invite = {
      uid: Md5.init(salt + usrData),
      salt: salt,
      otp: '',
      firstName: this.employeeDetails.firstName,
      middleName: this.employeeDetails.middleName,
      lastName: this.employeeDetails.lastName,
      dobDay: this.employeeDetails.dobDay,
      dobMonth: this.employeeDetails.dobMonth,
      dobYear: this.employeeDetails.dobYear,
      email: this.employeeDetails.email,
      phone: this.employeeDetails.phone,
      role: this.employeeDetails.role,
      odsCode: this.employeeDetails.odsCode,
      statusInvite: "CREATED",
      statusPYI: "PENDING",
      createdBy: "Data Unavailable"
    };
    console.log("Invite: " + invite);

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

  makeSalt(length: number) {
    let result = '';
    const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
}
