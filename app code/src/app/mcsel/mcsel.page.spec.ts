import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { McselPage } from './mcsel.page';

describe('McselPage', () => {
  let component: McselPage;
  let fixture: ComponentFixture<McselPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McselPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(McselPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
