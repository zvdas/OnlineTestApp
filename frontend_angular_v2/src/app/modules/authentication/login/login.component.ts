import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  currentUser: User = {} as User;
  msg='';

  loginForm = new FormGroup({
    uname: new FormControl('', [Validators.required]),
    pword: new FormControl(''),
  });
  
  constructor(private us: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList() {
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
