import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScorerPage } from './scorer.page';

describe('ScorerPage', () => {
  let component: ScorerPage;
  let fixture: ComponentFixture<ScorerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScorerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScorerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
