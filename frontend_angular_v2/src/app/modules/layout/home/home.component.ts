import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.style.backgroundImage='url(https://images.unsplash.com/photo-1606326608690-4e0281b1e588?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470)';
    document.body.style.backgroundSize='cover';
    document.body.style.position='fixed';
    /*
      attribute
      Photo by Nguyen Dang Hoang Nhu on Unsplash
      https://unsplash.com/photos/cbEvoHbJnIE?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
    */
  }

}
