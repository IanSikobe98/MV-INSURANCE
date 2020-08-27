import { TestBed } from '@angular/core/testing';

import { DisppolicyService } from './disppolicy.service';

describe('DisppolicyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisppolicyService = TestBed.get(DisppolicyService);
    expect(service).toBeTruthy();
  });
});
