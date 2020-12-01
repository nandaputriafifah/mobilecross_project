import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListProvincePageRoutingModule } from './list-province-routing.module';

import { ListProvincePage } from './list-province.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListProvincePageRoutingModule
  ],
  declarations: [ListProvincePage]
})
export class ListProvincePageModule {}
