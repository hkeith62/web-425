 /*
============================================
; Title: base-layout.component.ts
; Author: Professor Krasso
; Date: 02/06/2022
; Modified By: Keith Hall
; Description: component.ts file for the base-layout component of the gpa calculator.
;===========================================
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  assignment: string;

  constructor() {
    this.assignment = 'Exercise 6.4- Input Properties';
  }

  ngOnInit(): void {
  }

}
