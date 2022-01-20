/**
 * Title: My Details Component.ts
 * Author: Professor Krasso
 * Date: 01/19/2022
 * Modified By: Keith Hall
 * Description: My details compoent.ts file for enhanced-secure-profile-app.
 */
import { Component, OnInit } from '@angular/core';

export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    "#Typescript", "#2020", "#CodingWithAngular", "#ngOmaha"
  ];
  constructor(fullName: string, favoriteFood: string, favoriteColor: string ) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor
  }
  toString() {
    console.log(`\n  Full Name: ${this.fullName}\n  Favorite Food: ${this.favoriteFood}\n  Favorite Color: ${this.favoriteColor}`);
  }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {

  myProfile: Person;

  constructor() {
    this.myProfile = new Person("Keith Hall", "Italian", "Gold");
    this.myProfile.toString();
  }

  ngOnInit(): void {
  }

}
