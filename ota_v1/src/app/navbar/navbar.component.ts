import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabasesService } from '../services/databases.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  pDetails: any;
  pDetailsparsed: any;

  constructor(private db:DatabasesService, private router:Router) { }

  ngOnInit(): void {

    // this.pDetails = localStorage.getItem('participant');
    this.pDetails = this.db.getParticipants();
    console.log(`navbar participant : ${this.pDetails}`);
    this.pDetailsparsed = JSON.parse(this.pDetails);

  }

  curDate = new Date();
  
  Logout()
  {
    localStorage.clear();
    this.router.navigate(['/register']);
  }

}
