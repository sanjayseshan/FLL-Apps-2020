import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RobotdesignPage } from './robotdesign.page';

describe('RobotdesignPage', () => {
  let component: RobotdesignPage;
  let fixture: ComponentFixture<RobotdesignPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobotdesignPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RobotdesignPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
