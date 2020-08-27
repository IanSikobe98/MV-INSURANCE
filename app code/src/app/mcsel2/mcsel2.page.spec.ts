import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Mcsel2Page } from './mcsel2.page';

describe('Mcsel2Page', () => {
  let component: Mcsel2Page;
  let fixture: ComponentFixture<Mcsel2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mcsel2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Mcsel2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
