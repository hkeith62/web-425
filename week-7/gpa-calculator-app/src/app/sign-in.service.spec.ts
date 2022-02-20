/*
============================================
; Title: sign-in.service.spec.ts
; Author: Professor Krasso
; Date: 02/20/2022
; Modified By: Keith Hall
; Description: Sign-in service file for the gpa calculator.
;===========================================
*/
import { TestBed } from '@angular/core/testing';

import { SignInService } from './sign-in.service';

describe('SignInService', () => {
  let service: SignInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
