import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent {
  msg='';

  @Input() slide: string = '';

  authForm = new FormGroup({
    uname: new FormControl('', [Validators.required]),
    pword: new FormControl('', [Validators.required]),
  });

  constructor(private as: AuthService) { }

  ngOnInit(): void {
    if(this.slide === 'login') {
      document.body.style.backgroundColor='CornflowerBlue';
    } else {
      document.body.style.backgroundColor='Chocolate';
    }
  }

  onClickSubmit() {
    console.log(this.slide);
    if(this.slide === 'login') {
      this.as.loginRegisteredUser(this.authForm.controls['uname'].value, this.authForm.controls['pword'].value);
    } else if (this.slide === 'register') {
      this.as.registerNewUser(this.authForm.controls['uname'].value, this.authForm.controls['pword'].value);
    }
  }

}
