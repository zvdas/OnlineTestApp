import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  @Input() formInputData: any;

  inputFormGroup!: FormGroup;

  formControlNames: string[] = [];

  formTitles: string[] = [];

  finalObject: any;

  constructor(@Inject(MAT_DIALOG_DATA) private data: {object: any, formTitles: any, formControlNames: any, inputFormGroup: any}) { }

  ngOnInit(): void {
    this.getForm();
    if(Object.keys(this.data.object).length > 0) {
      this.patchFormValues();
    }
  }

  getForm() {
    this.formTitles = this.data.formTitles;
    this.inputFormGroup = this.data.inputFormGroup;
    this.formControlNames = this.data.formControlNames;
  }  

  patchFormValues() {
    this.inputFormGroup.patchValue(this.data.object);
  }

  submitForm() {
    // console.log(this.inputFormGroup.value);
  }

}
