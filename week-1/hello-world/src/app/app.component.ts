/*
============================================
; Title:  Hello World
; Author: Professor Krasso
; Date: 01/07/2022
; Modified By: Keith Hall
; Description: File containing Javascript logic and functionality for hello-world app.
;===========================================
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myWorld = "You are now in Hall's world!";
}
