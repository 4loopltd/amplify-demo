import {Md5} from "md5-typescript";
import {Invite} from "../../types/Invite";

export class VerificationDetails {
  uid: any;
  otp: any;

  firstName: string = '';
  lastName: string = '';
  email: string = '';

  invite: Invite | undefined;

  isPresentUID() {
    return !!this.uid;
  }

  isValidUID() {
    if(!this.uid || !this.firstName|| !this.lastName|| !this.email){
      return false;
    }

    if(!this.invite){
      return false;
    }

    let usrData = '';
    usrData = usrData.concat(this.firstName.trim().toLowerCase());
    usrData = usrData.concat(this.lastName.trim().toLowerCase());
    usrData = usrData.concat(this.email.trim().toLowerCase());

    let calculatedUID = Md5.init(this.invite.salt + usrData);
    return this.uid === calculatedUID;
  }

  isValidOTP() {
    if(!this.otp){
      return false;
    }

    if(!this.invite){
      return false;
    }

    if(!this.invite.otp){
      return false;
    }

    return this.otp === this.invite.otp;
  }

}
