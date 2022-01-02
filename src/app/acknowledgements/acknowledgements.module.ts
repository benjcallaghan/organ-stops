import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AcknowledgementsPageRoutingModule } from './acknowledgements-routing.module';
import { AcknowledgementsPage } from './acknowledgements.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcknowledgementsPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [AcknowledgementsPage],
})
export class AcknowledgementsPageModule {}
