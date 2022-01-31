 /*
============================================
; Title: Main.ts
; Author: Professor Krasso
; Date: 01/25/2022
; Modified By: Keith Hall
; Description: Main.ts file for app component.
;===========================================
*/
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
