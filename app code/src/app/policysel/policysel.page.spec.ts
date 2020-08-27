import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PolicyselPage } from './policysel.page';

describe('PolicyselPage', () => {
  let component: PolicyselPage;
  let fixture: ComponentFixture<PolicyselPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyselPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PolicyselPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
