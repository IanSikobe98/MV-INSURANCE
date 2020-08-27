import { TestBed } from '@angular/core/testing';

import { Respass2Service } from './respass2.service';

describe('Respass2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Respass2Service = TestBed.get(Respass2Service);
    expect(service).toBeTruthy();
  });
});
