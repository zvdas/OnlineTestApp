import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {

  constructor(private router: Router) {}

  goToQuiz() {
    this.router.navigateByUrl('/quiz');
  }

  goToQuizMaster() {
    this.router.navigateByUrl('/quiz/master');
  }
  
}
