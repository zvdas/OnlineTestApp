import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  /*
  msg='';
  slide: string = 'login';

  loginForm = new FormGroup({
    uname: new FormControl('', [Validators.required]),
    pword: new FormControl('', [Validators.required]),
  });
  
  constructor(private as: AuthService, private router: Router) { }
  
  */

  slide: string ='';
  
  ngOnInit(): void {
    document.body.style.backgroundColor='CornflowerBlue';
  }

  /*
  onClickSubmit() {
    this.as.loginRegisteredUser(this.loginForm.controls['uname'].value, this.loginForm.controls['pword'].value);
  }
  */
}
