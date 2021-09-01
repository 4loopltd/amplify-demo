import { Component, OnInit } from '@angular/core';
import {APIService} from "../../../API.service"
import {Invite} from "../../../../types/Invite";

@Component({
  selector: 'app-invite-list',
  templateUrl: './invite-list.component.html',
  styleUrls: ['./invite-list.component.sass']
})
export class InviteListComponent implements OnInit {

  page =1;
  pageSize=50;

  invites: Array<Invite> | undefined | null;

  constructor(private api: APIService) { }

  async ngOnInit() {
    this.api.ListInvites().then(event =>{
      this.invites = event.items as Invite[];
    });
  }

}
