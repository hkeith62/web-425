/**
 * Title: sign-in.guard.spec
 * Author: Professor Krasso
 * Date: 01/19/2022
 * Modified By: Keith Hall
 * Description: Sign in guard.spec file for unit testing.
 */
import { TestBed } from '@angular/core/testing';

import { SignInGuard } from './sign-in.guard';

describe('SignInGuard', () => {
  let guard: SignInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SignInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
