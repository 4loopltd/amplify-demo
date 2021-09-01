import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {DataModel} from "../data-model";

@Component({
  selector: 'app-data-component',
  templateUrl: './data-component.component.html',
  styleUrls: ['./data-component.component.sass']
})
export class DataComponentComponent implements OnInit {
  model: DataModel;

  constructor(public service: DataService) {
    this.model = service.model;
  }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.model);
  }
}
