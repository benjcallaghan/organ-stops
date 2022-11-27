import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ValidateEqualModule } from 'ng-validate-equal';
import { RegisterEmailPageRoutingModule } from './register-email-routing.module';
import { RegisterEmailPage } from './register-email.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterEmailPageRoutingModule,
    ValidateEqualModule,
  ],
  declarations: [RegisterEmailPage],
})
export class RegisterEmailPageModule {}
