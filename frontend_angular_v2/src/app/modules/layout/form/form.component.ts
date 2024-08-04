import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  mainTitle: string = '';
  formTitles: string[] = [];
  formControlNames: string[] = [];
  formPlaceholders: string[] = [];
  inputFormGroup!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      type: 'add' | 'edit',
      object: any,
      mainTitle: string,
      formTitles: string[],
      formControlNames: string[],
      formPlaceholders: string[],
      inputFormGroup: FormGroup}
  ) { }

  ngOnInit(): void {
    this.getForm();
    if(this.data.type === 'edit') {
      this.patchFormValues();
    }
  }

  getForm() {
    this.formTitles = this.data.formTitles;
    this.mainTitle = this.data.mainTitle;
    this.inputFormGroup = this.data.inputFormGroup;
    this.formControlNames = this.data.formControlNames;
    this.formPlaceholders = this.data.formPlaceholders;
  }

  patchFormValues() {
    this.inputFormGroup.patchValue(this.data.object);
  }

}
