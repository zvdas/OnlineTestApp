import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})

export class ErrorComponent implements OnInit {

  errorCode: number = 404;

  errorTitle: string = 'Page Cannot Be Found';

  errorDescription: string = 'It appears you have entered an incorrect web address. Please check the address once again!';

  constructor() { }

  ngOnInit(): void {
  }

}
