import { TestBed } from '@angular/core/testing';

import { DrivformService } from './drivform.service';

describe('DrivformService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DrivformService = TestBed.get(DrivformService);
    expect(service).toBeTruthy();
  });
});
