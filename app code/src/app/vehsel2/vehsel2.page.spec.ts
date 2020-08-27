import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Vehsel2Page } from './vehsel2.page';

describe('Vehsel2Page', () => {
  let component: Vehsel2Page;
  let fixture: ComponentFixture<Vehsel2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vehsel2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Vehsel2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
