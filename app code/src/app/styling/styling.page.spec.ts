import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StylingPage } from './styling.page';

describe('StylingPage', () => {
  let component: StylingPage;
  let fixture: ComponentFixture<StylingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StylingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StylingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
