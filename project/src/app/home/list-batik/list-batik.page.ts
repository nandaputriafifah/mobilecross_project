import { Component, OnInit } from '@angular/core';
import { BatikService } from '../batik.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list-batik',
  templateUrl: './list-batik.page.html',
  styleUrls: ['./list-batik.page.scss'],
})
export class ListBatikPage implements OnInit {
  batiks: any;

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
