import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DrivformPage } from './drivform.page';

describe('DrivformPage', () => {
  let component: DrivformPage;
  let fixture: ComponentFixture<DrivformPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrivformPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DrivformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
