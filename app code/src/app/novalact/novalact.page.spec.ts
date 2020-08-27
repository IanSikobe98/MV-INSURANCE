import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NovalactPage } from './novalact.page';

describe('NovalactPage', () => {
  let component: NovalactPage;
  let fixture: ComponentFixture<NovalactPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovalactPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NovalactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
