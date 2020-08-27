import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TransrepoPage } from './transrepo.page';

describe('TransrepoPage', () => {
  let component: TransrepoPage;
  let fixture: ComponentFixture<TransrepoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransrepoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TransrepoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
