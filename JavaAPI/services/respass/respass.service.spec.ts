import { TestBed } from '@angular/core/testing';

import { RespassService } from './respass.service';

describe('RespassService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RespassService = TestBed.get(RespassService);
    expect(service).toBeTruthy();
  });
});
