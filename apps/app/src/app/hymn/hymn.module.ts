import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EditArrangementPageModule } from '../edit-arrangement/edit-arrangement.module';
import { HymnPageRoutingModule } from './hymn-routing.module';
import { HymnPage } from './hymn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HymnPageRoutingModule,
    EditArrangementPageModule,
  ],
  declarations: [HymnPage],
})
export class HymnPageModule {}
