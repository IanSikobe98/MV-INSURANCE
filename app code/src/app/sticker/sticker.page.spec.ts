import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StickerPage } from './sticker.page';

describe('StickerPage', () => {
  let component: StickerPage;
  let fixture: ComponentFixture<StickerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StickerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StickerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
