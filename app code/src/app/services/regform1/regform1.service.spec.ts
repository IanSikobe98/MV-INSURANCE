import { TestBed } from '@angular/core/testing';

import { Regform1Service } from './regform1.service';

describe('Regform1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Regform1Service = TestBed.get(Regform1Service);
    expect(service).toBeTruthy();
  });
});
