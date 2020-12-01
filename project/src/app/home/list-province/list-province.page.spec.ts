import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListProvincePage } from './list-province.page';

describe('ListProvincePage', () => {
  let component: ListProvincePage;
  let fixture: ComponentFixture<ListProvincePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProvincePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListProvincePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
