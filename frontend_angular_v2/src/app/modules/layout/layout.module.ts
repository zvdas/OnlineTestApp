import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { ErrorComponent } from './error/error.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ErrorComponent,
    FormComponent,
    HomeComponent,
    NavbarComponent,
    TableComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
  ],
  exports: [
    NavbarComponent,
    FormComponent,
    TableComponent,
  ]
})

export class LayoutModule { }
