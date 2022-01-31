 /*
============================================
; Title:  App Component
; Author: Professor Krasso
; Date: 01/25/2022
; Modified By: Keith Hall
; Description: App component of the enterprise-composer-app
;===========================================
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string = "Exercise 4.4- Async Pipe";
}
