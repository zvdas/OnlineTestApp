import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  // userData: any;

  constructor(private as: AngularFireAuth, private router: Router) {
    as.authState.subscribe(user => {
      // if(user) {
        user
        // this.userData = user;
        ? localStorage.setItem('user', JSON.stringify(user))
      // } else {
        : localStorage.setItem('user', 'null');
      // }
    })
  }

  // Initialize Firebase
  // app = initializeApp(environment.firebaseConfig);

  // Initialize Firebase Authentication and get a reference to the service
  // auth = getAuth(this.app);

  isLoggedIn(): boolean {
    console.log(JSON.parse(localStorage.getItem('user')!));
    // return !JSON.parse(localStorage.getItem('user')!) ? true : false;
    return !JSON.parse(localStorage.getItem('user')!);
  }

  registerNewUser(email: string, password: string) {
    // createUserWithEmailAndPassword(this.auth, email, password)
    this.as
      .createUserWithEmailAndPassword(/*this.auth, */email, password)
      .then(creds=>{
        console.log(creds)
        // this.user = creds
      })
  }

  loginRegisteredUser(email: string, password: string) {
    // signInWithEmailAndPassword(this.auth, email, password)
    this.as
      .signInWithEmailAndPassword(/*this.auth, */email, password)
      // .then(creds => console.log(creds.user))
      .then(creds => localStorage.setItem('user', JSON.stringify(creds.user)))
      .then(() => this.router.navigate(['/layout/dashboard']))
      
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
    // signOut();
    return this.as
      .signOut()
      .then(() => localStorage.removeItem('user'))
      .then(() => this.router.navigateByUrl('/auth/login'));
  }

}
