import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-detail-batik',
  templateUrl: './detail-batik.page.html',
  styleUrls: ['./detail-batik.page.scss'],
})
export class DetailBatikPage implements OnInit {
dataURL: string;
batikDetail:any;
  constructor(
      private activatedRoute: ActivatedRoute,
      public afDatabase: AngularFireDatabase,
  ) {
  }

    ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.dataURL = paramMap.get('batik_id');
    });
    this.batikDetail = this.getBatik(this.dataURL);
  }
   getBatik(id) {
    this.afDatabase.object('batik/' + id ).valueChanges().subscribe(val => {
      this.batikDetail = val;
    });
  }

}
