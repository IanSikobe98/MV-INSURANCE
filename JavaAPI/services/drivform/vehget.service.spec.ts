import { TestBed } from '@angular/core/testing';

import { VehgetService } from './vehget.service';

describe('VehgetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VehgetService = TestBed.get(VehgetService);
    expect(service).toBeTruthy();
  });
});
