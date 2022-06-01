import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/classes/user/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-master',
  templateUrl: './user-master.component.html',
  styleUrls: ['./user-master.component.css']
})

export class UserMasterComponent implements OnInit {

  user!: User[];
  u!: User;
  userForm!: FormGroup;
  id: number = NaN;
  isAddMode: boolean = true;
  msg='';

  constructor(private fb: FormBuilder, private us: UserService, private router: Router) {
    this.userForm = this.fb.group({
      fullname    : ["",Validators.required],
      email       : ["",Validators.required],
      username    : ["",Validators.required],
      password    : ["",Validators.required],
      isAdmin     : [false]
    })
  }

  ngOnInit(): void {
    this.showAll();
  }

  showAll(){
    this.us.getUserDetails().subscribe(
      (response) => { this.user = response},
      (error) => console.log(error),
      () => console.log('completed')
    )
  }

  getUserById(id:number){
    this.us.getUserById(id).subscribe(
      (response) => {this.u = response},
      (error) => console.log(error),
      () => console.log('completed')
    )
    this.isAddMode = false;
  }

  onSubmit(){
    if(this.isAddMode){
      this.us.sendUserDetails(this.userForm.value);
      this.msg = "User added successfully.";
    }else if(!this.isAddMode){
      this.us.updateUserDetails(this.userForm.value.id, this.userForm.value);
      this.msg = "User updated successfully.";
    }
  }

  deleteUser(id:number){
    this.us.deleteUserDetails(id);
    this.msg = "User deleted successfully.";
  }

}