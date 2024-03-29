import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AcceptFormDataService} from "../services/accept-form-data.service";
import {VerificationDetails} from "../models/verification-details";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  verificationDetails: VerificationDetails;

  constructor(private router: Router, private formDataService: AcceptFormDataService) {
    this.verificationDetails = formDataService.verificationDetails;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.verificationDetails.isValidUID() && this.verificationDetails.isValidOTP()) {
      // logged in so return true
      return true;
    }

    console.log("Invalid verification details");

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/inviteverify'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}
