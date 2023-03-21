import { TestBed } from '@angular/core/testing';

import { RouteProtectionGuard } from './route-protection.guard';

describe('RouteProtectionGuard', () => {
  let guard: RouteProtectionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RouteProtectionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
