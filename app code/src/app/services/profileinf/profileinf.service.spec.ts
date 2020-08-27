import { TestBed } from '@angular/core/testing';

import { ProfileinfService } from './profileinf.service';

describe('ProfileinfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfileinfService = TestBed.get(ProfileinfService);
    expect(service).toBeTruthy();
  });
});
