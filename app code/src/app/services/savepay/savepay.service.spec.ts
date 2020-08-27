import { TestBed } from '@angular/core/testing';

import { SavepayService } from './savepay.service';

describe('SavepayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SavepayService = TestBed.get(SavepayService);
    expect(service).toBeTruthy();
  });
});
