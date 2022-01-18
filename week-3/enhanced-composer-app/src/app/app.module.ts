 /*
============================================
; Title:  App Module
; Author: Professor Krasso
; Date: 01/14/2022
; Modified By: Keith Hall
; Description: App Module of the Composer App
;===========================================
*/
/**
 * Title: app.module.ts
 * Author: Professor Krasso
 * Date: 21 April 2020
 * Description: App module
 */

 import { BrowserModule } from '@angular/platform-browser';
 import { NgModule } from '@angular/core';

 import { AppRoutingModule } from './app-routing.module';
 import { AppComponent } from './app.component';
 import { ContactComponent } from './contact/contact.component';
 import { AboutComponent } from './about/about.component';
 import { ComposerListComponent } from './composer-list/composer-list.component';
 import { ComposerDetailsComponent } from './composer-details/composer-details.component';
 import { RouterModule } from '@angular/router';

 @NgModule({
   declarations: [
     AppComponent,
     ContactComponent,
     AboutComponent,
     ComposerListComponent,
     ComposerDetailsComponent
   ],
   imports: [
     BrowserModule,
     AppRoutingModule,
     RouterModule
   ],
   providers: [],
   bootstrap: [AppComponent]
 })
 export class AppModule { }
