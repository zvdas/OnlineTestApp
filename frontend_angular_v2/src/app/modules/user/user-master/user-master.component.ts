import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-master',
  templateUrl: './user-master.component.html',
  styleUrls: ['./user-master.component.css']
})

export class UserMasterComponent implements OnInit {

  userList: User[] = [];
  user: User = {} as User;
  msg='';

  constructor(private us: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.us.getUserDetails().subscribe(
      response => { this.userList = response.map(x=>x.payload.doc.data()) as User[]},
      // response => console.log(response),
      error => console.log(error),
      () => console.log('completed')
    )
  }

  getUserById(id: string) {
    this.us
    .getUserById(id)
    .subscribe(
      response => { this.user = response.payload.data() as User},
      // response => console.log(response),
      error => console.log(error),
      () => console.log('completed')
    );
  }

  addUser() {
    this.us
      .sendUserDetails(this.user)
      .then(()=>this.msg = "User added successfully.")
      .catch(err=>this.msg = `Error adding user ${err}`);
  }

  updateUser(/*id: string*/) {
    /*
    this.us
      .updateUserDetails(id, this.u)
      .then(()=>this.msg = "User updated successfully.")
      .catch(err=>this.msg=`Error updating user ${err}`);
    */
  }

  deleteUser(id: string) {
    this.us
      .deleteUserDetails(id)
      .then(()=>this.msg = "User deleted successfully.")
      .catch(err=>this.msg=`Error deleting user ${err}`);
  }

  goToQuizMaster() {
    this.router.navigate(['/quizMaster'])
  }

}
