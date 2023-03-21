import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

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

  constructor() { }

  ngOnInit(): void {
    this.getForm();
  }

  getForm() {
    this.formTitles = this.formInputData.formTitles;
    this.inputFormGroup = this.formInputData.inputFormGroup;
    this.formControlNames = this.formInputData.formControlNames;
  }  

  submitForm() {
    console.log(this.inputFormGroup.value);
  }

}
