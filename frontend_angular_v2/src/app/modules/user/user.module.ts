import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserMasterComponent } from './user-master/user-master.component';
import { UserEnrollComponent } from './user-enroll/user-enroll.component';
import { AuthenticationModule } from '../authentication/authentication.module';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [
    UserMasterComponent,
    UserEnrollComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    AuthenticationModule,
    LayoutModule,
  ]
})

export class UserModule { }
