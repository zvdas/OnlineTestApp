import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  msg='';

  constructor(private fb: FormBuilder, private us: UserService, private router: Router) {
    this.registerForm = this.fb.group({
      fullname   : ["",Validators.required],
      email  : ["",Validators.required],
      username   : ["",Validators.required],
      password  : ["",Validators.required],
      isAdmin : [false]
    })
  }

  ngOnInit(): void {}

  onClickRegister(){
    console.log(this.registerForm.value);
    this.us.sendUserDetails(this.registerForm.value);
    this.msg = "User registered successfully. Please login to continue.";
  }

  goToLogin(){
    this.router.navigate(['/login'])
  }

}