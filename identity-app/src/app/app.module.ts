import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {AmplifyUIAngularModule} from "@aws-amplify/ui-angular";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/app/header/header.component';
import { FooterComponent } from './components/app/footer/footer.component';
import { InviteVerifyComponent } from './components/invite/invite-verify/invite-verify.component';
import { InviteLandingComponent } from './components/invite/invite-landing/invite-landing.component';
import { InvitePYIComponent } from './components/invite/invite-pyi/invite-pyi.component';
import { InviteErrorComponent } from './components/invite/invite-error/invite-error.component';
import { InviteCompleteComponent } from './components/invite/invite-complete/invite-complete.component';
import { InviteAcceptedComponent } from './components/invite/invite-accepted/invite-accepted.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InviteLandingComponent,
    InviteVerifyComponent,
    InvitePYIComponent,
    InviteErrorComponent,
    InviteCompleteComponent,
    InviteAcceptedComponent
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
export class AppModule { }
