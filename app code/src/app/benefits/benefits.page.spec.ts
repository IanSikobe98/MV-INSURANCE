import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BenefitsPage } from './benefits.page';

describe('BenefitsPage', () => {
  let component: BenefitsPage;
  let fixture: ComponentFixture<BenefitsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenefitsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BenefitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
