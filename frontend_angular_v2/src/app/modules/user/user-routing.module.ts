import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserEnrollComponent } from './user-enroll/user-enroll.component';
import { UserMasterComponent } from './user-master/user-master.component';

const routes: Routes = [
  { path: '', component: UserMasterComponent},
  { path: 'enroll', component: UserEnrollComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule { }
