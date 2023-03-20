import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/models/auth';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  currentUser: Auth = JSON.parse(localStorage.getItem('user')!);
  currentDate = new Date();

  constructor(private as: AuthService, private router: Router) { }

  ngOnInit(): void {

  }
  
  Logout() {
    this.as.logOutUser();
  }

}
