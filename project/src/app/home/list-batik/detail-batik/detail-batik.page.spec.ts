import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailBatikPage } from './detail-batik.page';

describe('DetailBatikPage', () => {
  let component: DetailBatikPage;
  let fixture: ComponentFixture<DetailBatikPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailBatikPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailBatikPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
