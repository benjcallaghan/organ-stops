import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FirebaseUIModule } from '../firebaseui-angular/firebaseui-angular-library.module';
import { UserPageRoutingModule } from './user-routing.module';
import { UserPage } from './user.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    UserPageRoutingModule,
    FirebaseUIModule.forFeature({}),
  ],
  declarations: [UserPage],
})
export class UserPageModule {}
