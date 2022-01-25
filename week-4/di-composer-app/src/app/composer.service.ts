 /*
============================================
; Title:  Composer Service
; Author: Professor Krasso
; Date: 01/24/2022
; Modified By: Keith Hall
; Description: Composer for di-composer-app.
;===========================================
*/
import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';

@Injectable({
  providedIn: 'root'
})

export class ComposerService {

  composers: Array<IComposer>;

  constructor() {
    this.composers = [
      {composerId: 200, fullName: "Ludwig Van Beethoven", genre: "Classical"},
      {composerId: 201, fullName: "Johann Sebastian Bach", genre: "Classical"},
      {composerId: 202, fullName: "Wolfgang Amadeus Mozart", genre: "Classical"},
      {composerId: 203, fullName: "Johannes Brahms", genre: "Classical"},
      {composerId: 204, fullName: "Joseph Haydn", genre: "Classical"}
    ]
  }
  getComposers() {
    return this.composers;
  }

  getComposer(composerId: number) : IComposer {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {

           return composer;
      }
    }
    return {} as IComposer;
  }
}

