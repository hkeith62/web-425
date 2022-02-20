/*
============================================
; Title: sign-in.component.ts
; Author: Professor Krasso
; Date: 02/18/2022
; Modified By: Keith Hall
; Description: Sign-in component for the gpa calculator.
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { SignInService } from '../sign-in.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;
  errorMessage: string;

  constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private signInService: SignInService) {

    this.errorMessage = '';
    this.signInForm = this.fb.group ({

      studentId: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])]
    })
  }

  ngOnInit(): void {
  }

  get form() {
    return this.signInForm.controls;
  }

  onSubmit() {

    const formValues = this.signInForm.value;
    const studentId = parseInt(formValues.studentId);

    if (this.signInService.validate(studentId)) {

      this.cookieService.set('session_user', studentId.toString(), 1);
      this.router.navigate(['/'])

    } else {
      this.errorMessage = 'The student ID you entered is invalid, please try again.'
    }
  }
}
