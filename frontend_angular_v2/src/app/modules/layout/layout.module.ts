import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';

import { LayoutRoutingModule } from './layout-routing.module';
import { ErrorComponent } from './error/error.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    ErrorComponent,
    NavbarComponent,
    FormComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatTableModule,
    MatFormFieldModule    
  ]
})

export class LayoutModule { }
