import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LinkGuard} from "./guards/link-guard";
import {AuthGuard} from "./guards/auth-guard";

import {InviteVerifyComponent} from "./components/invite/invite-verify/invite-verify.component";
import {InviteLandingComponent} from "./components/invite/invite-landing/invite-landing.component";
import {InvitePYIComponent} from "./components/invite/invite-pyi/invite-pyi.component";
import {InviteErrorComponent} from "./components/invite/invite-error/invite-error.component";
import {InviteCompleteComponent} from "./components/invite/invite-complete/invite-complete.component";

const routes: Routes = [
  {path: '', component: InviteLandingComponent},
  {path: 'inviteverify', component: InviteVerifyComponent, canActivate: [LinkGuard]},
  {path: 'invitepyi', component: InvitePYIComponent, canActivate: [AuthGuard]},
  {path: 'invitecomplete', component: InviteCompleteComponent},
  {path: 'inviteerror', component: InviteErrorComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
