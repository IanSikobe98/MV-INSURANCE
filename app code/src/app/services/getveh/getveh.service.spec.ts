import { TestBed } from '@angular/core/testing';

import { GetvehService } from './getveh.service';

describe('GetvehService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetvehService = TestBed.get(GetvehService);
    expect(service).toBeTruthy();
  });
});
