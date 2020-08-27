import { TestBed } from '@angular/core/testing';

import { ProfileupService } from './profileup.service';

describe('ProfileupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfileupService = TestBed.get(ProfileupService);
    expect(service).toBeTruthy();
  });
});
