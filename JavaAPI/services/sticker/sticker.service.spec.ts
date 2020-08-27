import { TestBed } from '@angular/core/testing';

import { StickerService } from './sticker.service';

describe('StickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StickerService = TestBed.get(StickerService);
    expect(service).toBeTruthy();
  });
});
