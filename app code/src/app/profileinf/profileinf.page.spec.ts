import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileinfPage } from './profileinf.page';

describe('ProfileinfPage', () => {
  let component: ProfileinfPage;
  let fixture: ComponentFixture<ProfileinfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileinfPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileinfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
