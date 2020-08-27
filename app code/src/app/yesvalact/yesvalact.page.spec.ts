import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YesvalactPage } from './yesvalact.page';

describe('YesvalactPage', () => {
  let component: YesvalactPage;
  let fixture: ComponentFixture<YesvalactPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YesvalactPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YesvalactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
