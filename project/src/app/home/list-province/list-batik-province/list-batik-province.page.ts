import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';
import firebase from 'firebase';
import {AngularFireDatabase} from '@angular/fire/database';
import {ActivatedRoute} from '@angular/router';
import {ProvinceService} from '../../province.service';

@Component({
  selector: 'app-list-batik-province',
  templateUrl: './list-batik-province.page.html',
  styleUrls: ['./list-batik-province.page.scss'],
})
export class ListBatikProvincePage implements OnInit {
provinceDetail: any;
provinceName: any;
dataURL: string;

  constructor(
      private provinceService: ProvinceService,
      public afDatabase: AngularFireDatabase,
      private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.dataURL = paramMap.get('province_id');
    });
    this.provinceDetail = this.getProvince(this.dataURL);
    this.provinceName = this.getProvinceName(this.dataURL);
  }

  // Get all list batik in province selected
  // Give parameter id for province_id
  getProvince(id) {
    const ref =  this.afDatabase.database.ref('province/' + id + '/list_batik');
    ref.once('value').then((snapshot) => {
      this.provinceDetail = snapshot.val();
    });
  }

  // Get list province name in province selected
  // Give parameter id for province_id
  getProvinceName(id) {
    this.afDatabase.database.ref('province/' + id).once('value').then((snapshot) => {
      this.provinceName = snapshot.val().province_name;
    });
  }

}
