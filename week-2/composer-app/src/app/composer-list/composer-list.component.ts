/*
============================================
; Title:  Composer-List component
; Author: Professor Krasso
; Date: 01/14/2022
; Modified By: Keith Hall
; Description: File implementing Composer interface
;===========================================
*/
import { Component, OnInit } from '@angular/core';

export default class Composer {
  fullName: string;
  genre: string;

  constructor(fullName: string, genre: string ) {
    this.fullName = fullName;
    this.genre = genre
  }

  toString() {
    console.log(`\n  Full Name: ${this.fullName}\n  Genre: ${this.genre}`);
  }
}
@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  composers: Array<Composer>;

  constructor() {

  this.composers = [
    new Composer("Ludwig van Beethoven", "Classical"),
    new Composer("Johann Sebastian Bach", "Classical"),
    new Composer("Wolfgang Amadeus Mozart", "Classical"),
    new Composer("Johannes Brahms", "Classical"),
    new Composer("Joseph Haydn", "Classical")
  ]
  }
  ngOnInit(): void {
  }

}
