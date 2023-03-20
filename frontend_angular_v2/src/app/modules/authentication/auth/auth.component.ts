import { Component } from '@angular/core';
import { Auth } from 'src/app/models/auth';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent {
  user: Auth = JSON.parse(localStorage.getItem('user')!);
}
