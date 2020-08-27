import { TestBed } from '@angular/core/testing';

import { PayconfService } from './payconf.service';

describe('PayconfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PayconfService = TestBed.get(PayconfService);
    expect(service).toBeTruthy();
  });
});
