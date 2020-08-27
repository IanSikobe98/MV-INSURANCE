import { TestBed } from '@angular/core/testing';

import { GettransService } from './gettrans.service';

describe('GettransService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GettransService = TestBed.get(GettransService);
    expect(service).toBeTruthy();
  });
});
