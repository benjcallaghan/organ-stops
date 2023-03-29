import { Component } from '@angular/core';
import { AlertController, NavController, IonicModule } from '@ionic/angular';
import { AuthenticationService } from '../authentication.service';
import { isAuthError } from '../firebase-utils';
import { ValidateEqualModule } from 'ng-validate-equal';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-register-email',
    templateUrl: './register-email.page.html',
    styleUrls: ['./register-email.page.scss'],
    standalone: true,
    imports: [IonicModule, FormsModule, ValidateEqualModule]
})
export default class RegisterEmailPage {
  public user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  constructor(
    private auth: AuthenticationService,
    private alerts: AlertController,
    private nav: NavController
  ) {}

  async registerUser() {
    try {
      await this.auth.createUserWithEmailAndPassword(
        this.user.email,
        this.user.password,
        `${this.user.firstName} ${this.user.lastName}`
      );
    } catch (e: unknown) {
      console.error(e);

      let message =
        'An error occurred while registering your account. Please try again later. If the issue persists, please contact support.';
      let afterModal: (() => void) | null = null;

      if (isAuthError(e)) {
        switch (e.code) {
          case 'auth/email-already-in-use': {
            const providers = await this.auth.fetchSignInMethodsForEmail(
              this.user.email
            );
            if (providers.length === 1) {
              message = `You already have an account with a different login. Plese sign in again with ${providers[0]}.`;
            } else {
              message = `You already have an account with a different login. Please sign in again using one of ${providers.join(
                ', '
              )}.`;
            }
            afterModal = () =>
              this.nav.navigateBack('/user', {
                state: {
                  email: this.user.email,
                  password: this.user.password,
                },
              });
            break;
          }
          case 'auth/invalid-email':
            message =
              'The email address you provided is not valid. Please check the spelling or re-type your email address.';
            break;
          case 'auth/operation-not-allowed':
            // This is a developer error, and the true reason should be hidden from the user.
            break;
          case 'auth/weak-password':
            message =
              'Your chosen password is too weak. Please choose a stronger password and try again.' +
              'Passwords must be at least 6 characters in length.';
            break;
        }
      }

      const alert = await this.alerts.create({
        header: 'Login Failed',
        message,
        buttons: [
          {
            text: 'OK',
          },
        ],
      });
      await alert.present();

      await alert.onDidDismiss();
      afterModal?.();
    }
  }
}
