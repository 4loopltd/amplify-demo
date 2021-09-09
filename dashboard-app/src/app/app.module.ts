import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {AmplifyUIAngularModule} from "@aws-amplify/ui-angular";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {HeaderComponent} from './components/app/header/header.component';
import {FooterComponent} from './components/app/footer/footer.component';
import {SponsorDashboardComponent} from './components/sponsor/sponsor-dashboard/sponsor-dashboard.component';
import {InviteListComponent} from './components/invite/invite-list/invite-list.component';
import {InviteViewComponent} from './components/invite/invite-view/invite-view.component';
import {InviteCreateComponent} from './components/invite/invite-create/invite-create.component';
import {InviteChecksComponent} from './components/invite/invite-checks/invite-checks.component';
import {InviteEmployeeComponent} from './components/invite/invite-employee/invite-employee.component';
import {InviteSummaryComponent} from './components/invite/invite-summary/invite-summary.component';
//??? boot

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SponsorDashboardComponent,
    InviteListComponent,
    InviteViewComponent,
    InviteCreateComponent,
    InviteChecksComponent,
    InviteEmployeeComponent,
    InviteSummaryComponent
  ],
  imports: [
    AmplifyUIAngularModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
