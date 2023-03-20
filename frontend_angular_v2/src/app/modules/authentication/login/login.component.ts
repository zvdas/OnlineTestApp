import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  user: User[] = [];
  currentUser: User = {} as User;
  msg='';

  loginForm = new FormGroup({
    uname: new FormControl('', [Validators.required]),
    pword: new FormControl('', [Validators.required]),
  });
  
  constructor(private as: AuthService, private router: Router) { }

  ngOnInit(): void {
    /*
    const auth = getAuth();

    console.log(auth);
    
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log('user logged in');
        // ...
      } else {
        // User is signed out
        console.log('user logged out');
        // ...
      }
    });
    */
  }

  onClickLogin(){
    /*
    if(this.user[this.user.map(x=>x.username).indexOf(this.loginForm.value.uname)].password===this.loginForm.value.pword){
      this.msg = 'Login Successful. Redirecting to quiz now.';
      this.currentUser = this.user[this.user.map(x=>x.username).indexOf(this.loginForm.value.uname)];
      localStorage.clear();
      localStorage.setItem('currentUser',JSON.stringify(this.currentUser));
      if(this.currentUser.isAdmin){
        this.router.navigate(['/userMaster'])
      }else{
        this.router.navigate(['/quizDisplay'])
      }
    }else{
      this.msg = 'Incorrect username or password. Please try again.'
    }
    */

    this.as.loginRegisteredUser(this.loginForm.controls['uname'].value, this.loginForm.controls['pword'].value);
  }

  goToRegister(){
    this.router.navigate(['/register'])
  }

}
