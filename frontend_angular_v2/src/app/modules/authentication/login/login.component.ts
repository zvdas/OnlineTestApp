import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  user: User[] = [];
  loginForm!: FormGroup;
  currentUser: User = {} as User;
  msg='';

  constructor(private fb: FormBuilder, private us: UserService, private router: Router) {
    
    this.loginForm = this.fb.group({
      uname : ["", Validators.required],
      pword : ["", Validators.required]
    })

  }

  ngOnInit(): void {
    this.us.getUserDetails().subscribe(
      (response) => {this.user = response.map(res=>res.payload.doc.data() as User)},
      (error) => console.log(error),
      () => console.log("completed")
    )
  }

  onClickLogin(){
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
  }

  goToRegister(){
    this.router.navigate(['/register'])
  }

}