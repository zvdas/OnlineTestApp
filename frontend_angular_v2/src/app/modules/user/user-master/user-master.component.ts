import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';
import { FormComponent } from '../../layout/form/form.component';

@Component({
  selector: 'app-user-master',
  templateUrl: './user-master.component.html',
  styleUrls: ['./user-master.component.css']
})

export class UserMasterComponent implements OnInit {

  user: User = {} as User;
  userList: User[] = [];
  isLoaded: boolean = false;

  formInputData: any = {
    formTitles: ['ID', 'Full Name', 'Email'],
    formControlNames: ['id', 'full_name', 'email'],
    inputFormGroup: new FormGroup({
      id: new FormControl(''),
      full_name: new FormControl(''),
      email: new FormControl(''),
    }),
    component: FormComponent
  };

  tableData: any = {
    data: this.userList,
    columns: [
      {key: 'index', label: '#'},
      {key: 'full_name', label: 'Full Name'},
      {key: 'email', label: 'Email'},
      {key: 'answers', label: 'Answers'},
      // {key: 'action', label: 'Action'},
    ]
  };

  constructor(private us: UserService) { }

  ngOnInit(): void {
    document.body.style.backgroundColor = 'Orange';
    this.getUserList();
  }

  updateQuizForm(userData: any) {
    if(Object.keys(userData).includes('id') && !userData.id) {
      this.us.createNewUser(userData);
    } else if(!Object.keys(userData).includes('id')) {
      this.us.deleteUser(userData);
    } else {
      this.us.updateUser(userData.id, userData);
    }
  }

  getUserList() {
    this.us
      .getUserList()
      .subscribe(res => {
        res.map(item => {
          this.userList.push({
            id: item.payload.doc.id,
            full_name: JSON.parse(JSON.stringify(item.payload.doc.data())).full_name,
            email: JSON.parse(JSON.stringify(item.payload.doc.data())).email,
            answers: JSON.parse(JSON.stringify(item.payload.doc.data())).answers,
          } as User);
          this.isLoaded = true;
        });
      });
  }

}