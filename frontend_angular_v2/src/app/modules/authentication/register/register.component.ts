import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  /*
  msg='';

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private as: AuthService, private router: Router) { }
  */

  slide: string = '';

  ngOnInit(): void {
    document.body.style.backgroundColor='Chocolate';
  }

  /*
  onClickRegister(){
    console.log(this.registerForm.value);
    this.as.registerNewUser(this.registerForm.value.email, this.registerForm.value.password);
    this.msg = "User registered successfully. Please login to continue.";
  }

  goToLogin(){
    this.router.navigate(['/login'])
  }
  */

}
