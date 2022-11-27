import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserPageRoutingModule } from './user-routing.module';
import { UserPage } from './user.page';

@NgModule({
  imports: [IonicModule, CommonModule, UserPageRoutingModule, FormsModule],
  declarations: [UserPage],
})
export class UserPageModule {}
