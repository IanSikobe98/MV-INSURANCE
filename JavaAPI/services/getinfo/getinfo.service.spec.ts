import { TestBed } from '@angular/core/testing';

import { GetinfoService } from './getinfo.service';

describe('GetinfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetinfoService = TestBed.get(GetinfoService);
    expect(service).toBeTruthy();
  });
});
