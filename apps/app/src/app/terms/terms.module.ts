import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TermsPageRoutingModule } from './terms-routing.module';
import { TermsPage } from './terms.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, TermsPageRoutingModule],
  declarations: [TermsPage],
})
export class TermsPageModule {}
