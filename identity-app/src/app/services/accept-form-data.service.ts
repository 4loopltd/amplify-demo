import { Injectable } from '@angular/core';
import {VerificationDetails} from "../models/verification-details";

@Injectable({
  providedIn: 'root'
})
export class AcceptFormDataService {

  verificationDetails: VerificationDetails;

  constructor() {
    this.verificationDetails = new VerificationDetails();
  }

  reset() {
    this.verificationDetails = new VerificationDetails();
  }
}
