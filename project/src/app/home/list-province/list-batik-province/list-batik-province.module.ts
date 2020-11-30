import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListBatikProvincePageRoutingModule } from './list-batik-province-routing.module';

import { ListBatikProvincePage } from './list-batik-province.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListBatikProvincePageRoutingModule
  ],
  declarations: [ListBatikProvincePage]
})
export class ListBatikProvincePageModule {}
