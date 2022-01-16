import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabasesService } from '../services/databases.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form!: FormGroup;
  
  constructor(private db:DatabasesService, private router: Router) { }

  ngOnInit(): void {

    this.form=new FormGroup(
      {
        'fullname':new FormControl("",Validators.required),
        'emailid':new FormControl("",Validators.email),
        'uname':new FormControl("",Validators.required),
        'pword':new FormControl("",Validators.required)
      }
    );
    
  }

  onClickSubmit()
  {
    this.db.sendParticipantDetails(this.form.value);
    localStorage.clear();
    localStorage.setItem('participant',JSON.stringify(this.form.value));
    this.router.navigate(['/quiz']);
  }

}
