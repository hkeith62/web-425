 /*
============================================
; Title:  book-list.component.ts
; Author: Professor Krasso
; Date: 01/25/2022
; Modified By: Keith Hall
; Description: Component.ts of the book-list component.
;===========================================
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
