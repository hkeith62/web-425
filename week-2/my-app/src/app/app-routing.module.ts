/*
============================================
; Title:  Routing Module
; Author: Professor Krasso
; Date: 01/11/2022
; Modified By: Keith Hall
; Description: File containing imported components and route configurations for the my-app application
;===========================================
*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // CLI imports router

/* Import Components */
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

// Route configurations
const routes: Routes = [
  { path: '',             // Defines the URL path for the route and the corresponding component to display when navigating to path.
    component: HomeComponent
  },
  { path: 'home',
  component: HomeComponent
  },
  { path: 'contact',
  component: ContactComponent // Sink URL path http:localhost/contact with the ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];
// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
