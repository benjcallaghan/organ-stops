import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SongsPageRoutingModule } from './songs-routing.module';
import { SongsPage } from './songs.page';

@NgModule({
  imports: [IonicModule, CommonModule, SongsPageRoutingModule],
  declarations: [SongsPage],
})
export class SongsPageModule {}
