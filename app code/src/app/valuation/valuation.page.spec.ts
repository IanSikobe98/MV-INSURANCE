import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ValuationPage } from './valuation.page';

describe('ValuationPage', () => {
  let component: ValuationPage;
  let fixture: ComponentFixture<ValuationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ValuationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
