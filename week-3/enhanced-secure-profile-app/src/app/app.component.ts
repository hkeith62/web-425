 /*
============================================
; Title:  App Component
; Author: Professor Krasso
; Date: 01/11/2022
; Modified By: Keith Hall
; Description: App component of the enhance-profile-app
;===========================================
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn: Boolean = true;    // Value of isLoggedIn is set to true
  assignment: string = 'Exercise 3.3 - Passing Data to Routes, Part 2';
}
