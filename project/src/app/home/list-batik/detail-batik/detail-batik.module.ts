import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailBatikPageRoutingModule } from './detail-batik-routing.module';

import { DetailBatikPage } from './detail-batik.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailBatikPageRoutingModule
  ],
  declarations: [DetailBatikPage]
})
export class DetailBatikPageModule {}
