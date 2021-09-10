import {Md5} from "md5-typescript";

export class VerificationDetails {
  uid: any;
  otp: any;

  firstName: string = '';
  lastName: string = '';
  email: string = '';

  salt: String = '';
  otpGenerated: string = '';

  isValidUID() {
    if(!this.uid || !this.firstName|| !this.lastName|| !this.email){
      return false;
    }

    let usrData = '';
    usrData = usrData.concat(this.firstName.trim().toLowerCase());
    usrData = usrData.concat(this.lastName.trim().toLowerCase());
    usrData = usrData.concat(this.email.trim().toLowerCase());

    let calculatedUID = Md5.init(this.salt + usrData);

    console.log("Input UID: " + this.uid );
    console.log("Calculated UID: " + calculatedUID );

    console.log("Valid UID: " + (this.uid === calculatedUID));
    return this.uid === calculatedUID;
  }

  isValidOTP() {
    if(!this.otpGenerated || !this.otp){
      return false;
    }

    console.log("Valid OTP: " + (this.otp === this.otpGenerated) );
    return this.otp === this.otpGenerated;
  }

}
