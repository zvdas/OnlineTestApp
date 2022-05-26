import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    AdminComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RegisterComponent
  ]
})
export class UserModule { }
