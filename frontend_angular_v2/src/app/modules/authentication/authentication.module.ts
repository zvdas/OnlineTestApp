import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [
    LoginComponent, 
    RegisterComponent, 
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    LayoutModule
  ],
  exports: [
    LoginComponent, 
    AuthComponent
  ],
})

export class AuthenticationModule {}
