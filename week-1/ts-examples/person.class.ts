/*
============================================
; Title:  Hello World
; Author: Professor Krasso
; Date: 01/07/2022
; Modified By: Keith Hall
; Description: File implementing IPerson interface
;===========================================
*/
import { IPerson } from "./person.interface"; // Imports IPerson interface

class Person implements IPerson{        // Class to implement IPerson interface

    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {

        this.firstName = firstName;
        this.lastName = lastName;
    }
}
// Test Person interface
let myName = new Person("keith", "Hall");  // New person object is created with values passed in.
console.log(`My name is ${myName.firstName} ${myName.lastName}`); // Use the console to output objects value