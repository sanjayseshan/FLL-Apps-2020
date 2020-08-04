import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CorevaluesPage } from './corevalues.page';

describe('CorevaluesPage', () => {
  let component: CorevaluesPage;
  let fixture: ComponentFixture<CorevaluesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorevaluesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CorevaluesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
