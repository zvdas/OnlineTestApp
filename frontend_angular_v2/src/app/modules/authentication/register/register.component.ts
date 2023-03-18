import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  msg='';

  registerForm = new FormGroup({
    full_name: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    isAdmin: new FormControl(false),
  });

  constructor(private us: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onClickRegister(){
    console.log(this.registerForm.value);
    this.us.sendUserDetails(this.registerForm.value);
    this.msg = "User registered successfully. Please login to continue.";
  }

  goToLogin(){
    this.router.navigate(['/login'])
  }

}
