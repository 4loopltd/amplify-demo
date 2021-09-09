import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {InviteVerifyComponent} from "./components/invite/invite-verify/invite-verify.component";

const routes: Routes = [
  {
    path: '', component:InviteVerifyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
