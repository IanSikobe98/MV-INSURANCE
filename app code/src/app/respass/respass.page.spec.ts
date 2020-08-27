import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RespassPage } from './respass.page';

describe('RespassPage', () => {
  let component: RespassPage;
  let fixture: ComponentFixture<RespassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespassPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RespassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
