import {Injectable} from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AcceptFormDataService} from "../services/accept-form-data.service";
import {VerificationDetails} from "../models/verification-details";


@Injectable({
  providedIn: 'root'
})
export class AcceptedGuard implements CanActivate{

  verificationDetails: VerificationDetails;

  constructor(private router: Router, private formDataService: AcceptFormDataService) {
    this.verificationDetails = formDataService.verificationDetails;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (!this.verificationDetails || !this.verificationDetails.invite) {
      return true;
    }

    if(this.verificationDetails.invite.statusInvite !== 'ACCEPTED'){
      return true;
    }

    console.log("Invalid invite status");

    // already accepted
    this.router.navigate(['/inviteaccepted'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}
