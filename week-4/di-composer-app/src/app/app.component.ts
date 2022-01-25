 /*
============================================
; Title:  App Component
; Author: Professor Krasso
; Date: 01/24/2022
; Modified By: Keith Hall
; Description: App component of the di-composer-app
;===========================================
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string = "Exercise 4.2 - Inversion of Control and Dependency Injection";
}
