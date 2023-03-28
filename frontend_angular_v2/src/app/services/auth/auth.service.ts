import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private as: AngularFireAuth, private router: Router) {
    as.authState.subscribe(user => {
      user ? localStorage.setItem('user', JSON.stringify(user)) : localStorage.setItem('user', 'null');
    })
  }

  isLoggedIn(): boolean {
    // return !JSON.parse(localStorage.getItem('user')!) ? true : false;
    return !JSON.parse(localStorage.getItem('user')!);
  }

  registerNewUser(email: string, password: string) {
    this.as
      .createUserWithEmailAndPassword(email, password)
  }

  loginRegisteredUser(email: string, password: string) {
    this.as
      .signInWithEmailAndPassword(email, password)
      .then(creds => localStorage.setItem('user', JSON.stringify(creds.user)))
      .then(() => this.router.navigateByUrl('/quiz/master'));
  }

  forgotPassword(resetEmail: string) {
    this.as
      .sendPasswordResetEmail(resetEmail);
  }

  verifyEmail(resetCode: string) {
    this.as
      .verifyPasswordResetCode(resetCode);
  }

  logOutUser() {
    return this.as
      .signOut()
      .then(() => localStorage.removeItem('user'))
      .then(() => this.router.navigateByUrl('/auth/login'));
  }

}
