import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TimersPage } from './timers.page';

describe('TimersPage', () => {
  let component: TimersPage;
  let fixture: ComponentFixture<TimersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TimersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
