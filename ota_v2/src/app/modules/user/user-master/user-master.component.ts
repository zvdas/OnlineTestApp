import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
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
  msg='';

  constructor(private us: UserService, private router: Router) { }

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

  getUserById(id: number){
    this.us.getUserById(id).subscribe(
      (response) => {this.u = response},
      (error) => console.log(error),
      () => console.log('completed')
    )
  }

  addUser(){
    this.us.sendUserDetails(this.u);
    this.msg = "User added successfully.";
  }

  updateUser(){
    this.us.updateUserDetails(this.u.id, this.u)
    this.msg = "User updated successfully.";
  }

  deleteUser(id: number){
    this.us.deleteUserDetails(id);
    this.msg = "User deleted successfully.";
  }

  goToQuizMaster(){
    this.router.navigate(['/quizMaster'])
  }
}