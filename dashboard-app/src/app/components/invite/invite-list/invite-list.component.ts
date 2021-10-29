import {Component, OnInit} from '@angular/core';
import {Invite} from "../../../../types/Invite";
import {APIService} from "../../../API.service";

@Component({
  selector: 'app-invite-list',
  templateUrl: './invite-list.component.html',
  styleUrls: ['./invite-list.component.sass']
})
export class InviteListComponent implements OnInit {

  page = 1;
  pageSize = 50;

  invites: Array<Invite> | undefined | null;

  constructor(private api: APIService) {
  }

  async ngOnInit() {
    this.api.ListInvites().then(event => {
      this.invites = event.items as Invite[];
    });

    this.api.OnCreateInviteListener.subscribe((event: any) => {
        const newInvite = event.value.data.onCreateInvite;
        if (!this.invites?.some(obj => obj.uid === newInvite.uid)) {
          this.invites = [newInvite, ...this.invites as Invite[]];
        }
      }
    )
  }

}
