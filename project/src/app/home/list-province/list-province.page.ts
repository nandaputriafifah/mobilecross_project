import { Component, OnInit } from '@angular/core';
import {ProvinceService} from '../province.service';
import {map} from 'rxjs/operators';
import {AngularFireDatabase} from "@angular/fire/database";

@Component({
  selector: 'app-list-province',
  templateUrl: './list-province.page.html',
  styleUrls: ['./list-province.page.scss'],
})
export class ListProvincePage implements OnInit {
  provinces: any;
  provinceDetail: any;

  constructor(
      private provinceService: ProvinceService,
      public afDatabase: AngularFireDatabase
  ) { }

  ngOnInit() {
    this.provinceService.getAllProvince().snapshotChanges().pipe(
        map(changes =>
            changes.map(c => ({province_id: c.payload.key, ...c.payload.val()}))
        )
    ).subscribe(data => {
      this.provinces = data;
      console.log(data);
    });
  }
}
