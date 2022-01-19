import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn: Boolean = true;    // Value of isLoggedIn is set to true

  constructor() { }

  ngOnInit(): void {
  }

}
