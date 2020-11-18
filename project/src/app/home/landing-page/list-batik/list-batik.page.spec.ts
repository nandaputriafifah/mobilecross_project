import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListBatikPage } from './list-batik.page';

describe('ListBatikPage', () => {
  let component: ListBatikPage;
  let fixture: ComponentFixture<ListBatikPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBatikPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListBatikPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
