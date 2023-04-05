import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/models/auth';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  @Input() isLoggedIn!: boolean;

  currentUser: Auth | User = {} as Auth | User;
  currentDate = new Date();

  constructor(private as: AuthService, private router: Router) { }

  ngOnInit(): void {
    if(!this.isLoggedIn) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser')!);
    } else {
      this.currentUser = JSON.parse(localStorage.getItem('user')!)['providerData'][0];
    };
  }

  Logout() {
    if(!this.isLoggedIn) {
      localStorage.removeItem('currentUser');
      this.router.navigateByUrl('/home');
    } else {
      this.as.logOutUser();
    }
  }

}
