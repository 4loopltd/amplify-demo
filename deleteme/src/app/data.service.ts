import { Injectable } from '@angular/core';
import {DataModel} from "./data-model";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  model: DataModel;

  constructor() {
    this.model = new DataModel();
  }
}
