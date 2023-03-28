import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent {

  msg='';

  @Input() slide: string = '';

  authForm = new FormGroup({
    uname: new FormControl(''),
    pword: new FormControl(''),
    full_name: new FormControl(''),
    email: new FormControl(''),
  });


  constructor(private as: AuthService, private us: UserService, private router: Router) { }

  ngOnInit(): void {
    if(this.slide === 'login') {
      document.body.style.backgroundColor='CornflowerBlue';
    } else if (this.slide === 'enroll') {
      document.body.style.backgroundColor='MediumSeaGreen';
    } else {
      document.body.style.backgroundColor='Chocolate';
    }
  }

  onClickSubmit() {
    console.log(this.slide);
    if(this.slide === 'login') {
      this.as.loginRegisteredUser(this.authForm.controls['uname'].value, this.authForm.controls['pword'].value);
    } else if(this.slide === 'register') {
      this.as.registerNewUser(this.authForm.controls['uname'].value, this.authForm.controls['pword'].value);
    } else if(this.slide === 'enroll') {
      const enrollObject = {id: '', full_name: this.authForm.controls['full_name'].value, email: this.authForm.controls['email'].value, answers: []};
      this.us
        .createNewUser(enrollObject)
        .then(res=>{enrollObject.id = res.id})
        .then(()=>localStorage.setItem('currentUser', JSON.stringify(enrollObject)))
        .then(()=>console.log(localStorage.getItem('currentUser')))
        .finally(()=>this.router.navigateByUrl('/quiz'));
    }
  }

}
