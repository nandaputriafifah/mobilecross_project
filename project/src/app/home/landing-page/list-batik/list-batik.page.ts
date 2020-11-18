import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Batik} from "../../batik";
import {BatikService} from "../../batik.service";

@Component({
  selector: 'app-list-batik',
  templateUrl: './list-batik.page.html',
  styleUrls: ['./list-batik.page.scss'],
})
export class ListBatikPage implements OnInit {
  loadedBatik: Batik

  constructor(
      private activatedRoute: ActivatedRoute,
      private batikService: BatikService
  ) { }

  ngOnInit() {

  }

}
