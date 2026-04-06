import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { perfisGuard } from './perfis-guard';

describe('perfisGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => perfisGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
