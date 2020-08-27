import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileupdPage } from './profileupd.page';

describe('ProfileupdPage', () => {
  let component: ProfileupdPage;
  let fixture: ComponentFixture<ProfileupdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileupdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileupdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
