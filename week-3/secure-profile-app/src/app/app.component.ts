 /*
============================================
; Title:  App Component
; Author: Professor Krasso
; Date: 01/19/2022
; Modified By: Keith Hall
; Description: App component of the secure-profile-app
;===========================================
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string = 'Exercise 3.3 - Passing Data to Routes, Part 2';
}
