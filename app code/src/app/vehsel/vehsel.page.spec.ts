import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VehselPage } from './vehsel.page';

describe('VehselPage', () => {
  let component: VehselPage;
  let fixture: ComponentFixture<VehselPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehselPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VehselPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
