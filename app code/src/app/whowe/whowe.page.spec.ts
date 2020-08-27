import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WhowePage } from './whowe.page';

describe('WhowePage', () => {
  let component: WhowePage;
  let fixture: ComponentFixture<WhowePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhowePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WhowePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
