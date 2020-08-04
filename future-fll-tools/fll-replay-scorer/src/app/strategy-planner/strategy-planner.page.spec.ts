import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StrategyPlannerPage } from './strategy-planner.page';

describe('StrategyPlannerPage', () => {
  let component: StrategyPlannerPage;
  let fixture: ComponentFixture<StrategyPlannerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrategyPlannerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StrategyPlannerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
