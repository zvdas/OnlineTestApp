import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [
    {
      provide: MAT_DIALOG_DATA,
      useValue: {}
    }
  ]
})

export class FormComponent implements OnInit {

  @Input() formInputData: any;

  mainTitle: string = '';
  formTitles: string[] = [];
  formControlNames: string[] = [];
  inputFormGroup!: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) private data: {object: any, mainTitle: string, formTitles: string[], formControlNames: string[], inputFormGroup: FormGroup}) { }

  ngOnInit(): void {
    this.getForm();
    if(Object.keys(this.data.object).length > 0) {
      this.patchFormValues();
    }
  }

  getForm() {
    this.formTitles = this.data.formTitles;
    this.mainTitle = this.data.mainTitle;
    this.inputFormGroup = this.data.inputFormGroup;
    this.formControlNames = this.data.formControlNames;
  }

  patchFormValues() {
    this.inputFormGroup.patchValue(this.data.object);
  }

}
