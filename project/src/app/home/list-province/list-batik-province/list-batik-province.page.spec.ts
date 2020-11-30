import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListBatikProvincePage } from './list-batik-province.page';

describe('ListBatikProvincePage', () => {
  let component: ListBatikProvincePage;
  let fixture: ComponentFixture<ListBatikProvincePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBatikProvincePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListBatikProvincePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
