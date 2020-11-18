import { Component, OnInit } from '@angular/core';
import {BatikService} from "../batik.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})
export class LandingPagePage implements OnInit {
  batiks: any;

  // This for custom slider image province
  // slidesPerView means showing two images (slides) per view
  sliderOpts = {
    slidesPerView: 2.2,
    spaceBetween: 10
  }

  constructor(private batikService: BatikService) { }

  ngOnInit() {
    this.batikService.getAllBatik().snapshotChanges().pipe(
        map(changes =>
            changes.map(c => ({batik_id: c.payload.key, ...c.payload.val()}))
        )
    ).subscribe(data => {
      this.batiks = data;
      console.log(data);
    });
  }

}
