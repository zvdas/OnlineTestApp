import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  user:User[]=[];
  loginForm!: FormGroup;
  msg='';

  constructor(private fb: FormBuilder, private us: UserService, private router: Router) {
    
    this.loginForm = this.fb.group({
      uname : ["", Validators.required],
      pword : ["", Validators.required]
    })

  }

  ngOnInit(): void {
    this.us.getUserDetails().subscribe(
      (response) => {this.user = response},
      (error) => console.log(error),
      () => console.log("completed")
    )
  }

  onClickLogin(){
    if(this.user[this.user.map(x=>x.username).indexOf(this.loginForm.value.uname)].password===this.loginForm.value.pword){
      this.msg = 'Login Successful. Redirecting to quiz now.'
      localStorage.clear();
      localStorage.setItem('user',JSON.stringify(this.user));
      this.router.navigate(['/displayQuiz'])
      this.msg = 'User does not exist. Please register and login again.'
    }else{
      this.msg = 'Incorrect username or password. Please try again.'
    }
  }


  goToRegister(){
    this.router.navigate(['/register'])
  }

}