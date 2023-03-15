import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    ErrorComponent,
    FormComponent,
    NavbarComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})

export class LayoutModule { }
