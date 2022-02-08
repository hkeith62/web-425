/**
 * Title: app.component.ts
 * Author: Professor Krasso
 * Date: 02/08/2022
 * Modified by: Keith Hall
 * Description: App component.ts for the for in-n-out-booksp3-app.
 */

 import { Component } from '@angular/core';

 @Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
 })
 export class AppComponent {
   assignment: string;

   constructor() {
     this.assignment = "Exercise 6.2 - Input/Output Properties, Part 1";
   }
 }
