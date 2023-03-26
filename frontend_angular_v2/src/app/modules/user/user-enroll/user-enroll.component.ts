import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-enroll',
  templateUrl: './user-enroll.component.html',
  styleUrls: ['./user-enroll.component.css']
})

export class UserEnrollComponent implements OnInit {
  slide: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
