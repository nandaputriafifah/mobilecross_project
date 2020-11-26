import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AngularFireDatabase, snapshotChanges} from '@angular/fire/database';
import {BatikService} from "../../batik.service";
import {map} from "rxjs/operators";


@Component({
  selector: 'app-detail-batik',
  templateUrl: './detail-batik.page.html',
  styleUrls: ['./detail-batik.page.scss'],
})
export class DetailBatikPage implements OnInit {
dataURL: string;
batikDetail:any;
batiks: any;
batikName: string;
batikHistory: string;
batikImage: string;
batikDescription: string;
batikProvince: string;


  constructor(
      private activatedRoute: ActivatedRoute,
      public afDatabase: AngularFireDatabase,
      public batikService: BatikService
  ) {
  }

    ngOnInit() {
      this.batikService.getAllBatik().snapshotChanges().pipe(
          map(changes =>
              changes.map(c => ({batik_id: c.payload.key, ...c.payload.val()}))
          )
      ).subscribe(data => {
        this.batiks = data;
        console.log('DATA', data);
        this.activatedRoute.paramMap.subscribe(paramMap => {
          this.dataURL = paramMap.get('batik_id');
        });
        this.batikDetail = this.getBatik(this.dataURL);
      });
  }

  getBatik(id) {
    let ref =  this.afDatabase.database.ref('batik/' + id);
    ref.once('value').then((snapshot) => {
        this.batikDetail = snapshot.val();
        this.batikName = this.batikDetail.batik_name;
        this.batikDescription = this.batikDetail.batik_description;
        this.batikProvince = this.batikDetail.province_name;
        this.batikHistory = this.batikDetail.batik_history;
        this.batikImage = this.batikDetail.batik_image;

    });
  }

}
