/*
============================================
; Title:  Routing Module
; Author: Professor Krasso
; Date: 01/14/2022
; Modified By: Keith Hall
; Description: File containing imported components and route configurations for the Composer App
;===========================================
*/
import { Routes } from '@angular/router';
import { SignInComponent} from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'sign-in',
    component: SignInComponent
  }
]
