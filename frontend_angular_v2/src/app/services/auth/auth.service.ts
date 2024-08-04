import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  authSubject = new BehaviorSubject(null);

  constructor(private afAuth: AngularFireAuth, private router: Router) {
  }

  registerNewUser(email: string, password: string) {
    this.afAuth
      .createUserWithEmailAndPassword(email, password)
  }

  loginRegisteredUser(email: string, password: string) {
    this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then(creds => localStorage.setItem('user', JSON.stringify(creds.user)))
      .then(() => this.router.navigateByUrl('/quiz/master'));
  }

  getLoggedInUser() {
    return this.afAuth.currentUser;
  }

  getLoginState() {
    return this.afAuth.authState;
  }

  forgotPassword(resetEmail: string) {
    this.afAuth
      .sendPasswordResetEmail(resetEmail);
  }

  verifyEmail(resetCode: string) {
    this.afAuth
      .verifyPasswordResetCode(resetCode);
  }

  logOutUser() {
    return this.afAuth
      .signOut()
      .then(() => localStorage.removeItem('user'))
      .then(() => this.router.navigateByUrl('/auth/login'));
  }

}
