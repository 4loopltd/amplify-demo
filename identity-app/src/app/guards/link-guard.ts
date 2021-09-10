import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AcceptFormDataService} from "../services/accept-form-data.service";
import {VerificationDetails} from "../models/verification-details";

@Injectable({
  providedIn: 'root'
})
export class LinkGuard implements CanActivate {

  verificationDetails: VerificationDetails;

  constructor(private router: Router, private formDataService: AcceptFormDataService) {
    this.verificationDetails = formDataService.verificationDetails;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.verificationDetails.isPresentUID()) {
      // has UID so return true
      return true;
    }
    // redirect to error page with the return url
    this.router.navigate(['/inviteerror'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}
