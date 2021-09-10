import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthGuard} from "./guards/auth-guard";

import {InviteVerifyComponent} from "./components/invite/invite-verify/invite-verify.component";
import {InviteLandingComponent} from "./components/invite/invite-landing/invite-landing.component";
import {InvitePYIComponent} from "./components/invite/invite-pyi/invite-pyi.component";

const routes: Routes = [
  {path: '', component: InviteLandingComponent},
  {path: 'login', component: InviteVerifyComponent},
  {path: 'invitepyi', component: InvitePYIComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
