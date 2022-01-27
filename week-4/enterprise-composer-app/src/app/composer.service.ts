 /*
============================================
; Title:  Composer Service
; Author: Professor Krasso
; Date: 01/25/2022
; Modified By: Keith Hall
; Description: Composer service for enterprise-composer-app.
;===========================================
*/
import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

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
  getComposers(): Observable<IComposer[]> { // Use Observable of method to create and return an observable array of IComposers.
    return of(this.composers);
  }

  getComposer(composerId: number) : IComposer {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {

           return composer;
      }
    }
    return {} as IComposer;
  }
  filterComposers(name: string): Observable<IComposer[]> {
            return of(this.composers).pipe(map(composers =>
              composers.filter(composer =>
                composer.fullName.toLowerCase().indexOf(name) > -1)))
  }
}

