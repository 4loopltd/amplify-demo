import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {SponsorDashboardComponent} from "./components/sponsor/sponsor-dashboard/sponsor-dashboard.component"
import {InviteCreateComponent} from "./components/invite/invite-create/invite-create.component";
import {InviteChecksComponent} from "./components/invite/invite-checks/invite-checks.component";
import {InviteEmployeeComponent} from "./components/invite/invite-employee/invite-employee.component";
import {InviteSummaryComponent} from "./components/invite/invite-summary/invite-summary.component";

const routes: Routes = [
  {path : '', component: SponsorDashboardComponent},
  {path : 'invitecreate', component: InviteCreateComponent},
  {path : 'invitechecks', component: InviteChecksComponent},
  {path : 'inviteemployee', component: InviteEmployeeComponent},
  {path : 'invitesummary', component: InviteSummaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
