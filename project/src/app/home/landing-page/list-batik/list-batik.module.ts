import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListBatikPageRoutingModule } from './list-batik-routing.module';

import { ListBatikPage } from './list-batik.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListBatikPageRoutingModule
  ],
  declarations: [ListBatikPage]
})
export class ListBatikPageModule {}
