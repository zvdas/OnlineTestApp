import { FormGroup } from "@angular/forms";

export interface FormInputData {
    mainTitle: string;
    formTitles: Array<string>;
    formControlNames: Array<string>;
    formPlaceholders: Array<string>;
    inputFormGroup: FormGroup;
    /*
    ({
      id: new FormControl(''),
      question: new FormControl(''),
      optionA: new FormControl(''),
      optionB: new FormControl(''),
      optionC: new FormControl(''),
      optionD: new FormControl(''),
      answer: new FormControl(''),
    }),
    */
    component: Function;
}
