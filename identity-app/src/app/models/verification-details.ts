import {Md5} from "md5-typescript";
import {Invite} from "../../types/Invite";

export class VerificationDetails {
  uid: any;
  otp: any;

  firstName: string = '';
  lastName: string = '';
  email: string = '';

  otpGenerated: string = '';
  invite: Invite | undefined;

  isPresentUID() {
    console.log("isPresentUID: " + this.uid );
    return !!this.uid;
  }

  isValidUID() {
    if(!this.uid || !this.firstName|| !this.lastName|| !this.email){
      console.log("Invalid inputs")
      return false;
    }

    if(!this.invite){
      console.log("Invalid invite")
      return false;
    }

    let usrData = '';
    usrData = usrData.concat(this.firstName.trim().toLowerCase());
    usrData = usrData.concat(this.lastName.trim().toLowerCase());
    usrData = usrData.concat(this.email.trim().toLowerCase());

    let calculatedUID = Md5.init(this.invite.salt + usrData);

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
