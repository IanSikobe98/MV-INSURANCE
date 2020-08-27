import { TestBed } from '@angular/core/testing';

import { Savepay2Service } from './savepay2.service';

describe('Savepay2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Savepay2Service = TestBed.get(Savepay2Service);
    expect(service).toBeTruthy();
  });
});
