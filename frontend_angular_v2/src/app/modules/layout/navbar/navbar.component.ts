import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, takeUntil } from 'rxjs';
import { Auth } from 'src/app/models/auth';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth/auth.service';
import { DateTimeService } from 'src/app/services/date-time/date-time.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit, OnDestroy {

  @Input() isLoggedIn: boolean = false;

  private subscriptions: Subscription[] = [];

  currentUser: any;
  currentDate: Date = new Date();

  constructor(
    private authService: AuthService,
    private dateTimeService: DateTimeService,
    private router: Router,
  ) { }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  ngOnInit(): void {
    this.currentUser = this.authService.getLoggedInUser();

    const loginStateSub = this.authService.getLoginState().subscribe(res => {
      if(res?.uid) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      };
    });
    this.subscriptions.push(loginStateSub);

    const dateTimeSub = this.dateTimeService.currentDate$.subscribe(date => {
      this.currentDate = date;
    });
    this.subscriptions.push(dateTimeSub);
  }

  Logout() {
    this.authService.logOutUser();
  }

}
