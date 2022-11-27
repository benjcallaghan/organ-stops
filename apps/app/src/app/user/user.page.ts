import { Component } from '@angular/core';
import {
  AuthCredential,
  AuthError,
  EmailAuthProvider,
  FacebookAuthProvider,
  GoogleAuthProvider,
} from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { AuthenticationService } from '../authentication.service';
import { isAuthError } from '../firebase-utils';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage {
  public user = {
    email: '',
    password: '',
  };
  private existingCredential: AuthCredential | null;

  constructor(
    private auth: AuthenticationService,
    private alerts: AlertController,
    private nav: NavController,
    private route: ActivatedRoute
  ) {}

  ionViewWillEnter() {
    if (history.state.email) {
      this.existingCredential = EmailAuthProvider.credential(
        history.state.email,
        history.state.password
      );
    }
  }

  async login() {
    await this.signIn(() =>
      this.auth.signInWithEmailAndPassword(this.user.email, this.user.password)
    );
  }

  async loginWithGoogle() {
    await this.signIn(() => this.auth.signInWithGoogle());
  }

  async loginWithFacebook() {
    await this.signIn(() => this.auth.signInWithFacebook());
  }

  private async signIn(signInMethod: () => Promise<unknown>) {
    try {
      await signInMethod();

      if (this.existingCredential) {
        await this.auth.linkWithCredential(this.existingCredential);
      }

      const successUrl =
        this.route.snapshot.queryParamMap.get('signInSuccessUrl');
      await this.nav.navigateBack(successUrl ?? '/songs');
    } catch (e: unknown) {
      console.error(e);

      let message =
        'An error occurred while signing in. Please try again later. If the issue persists, please contact support.';

      if (isAuthError(e)) {
        switch (e.code) {
          case 'auth/account-exists-with-different-credential': {
            this.existingCredential = this.getCredentialFromError(e);
            const providers = await this.auth.fetchSignInMethodsForEmail(
              e.customData.email as string
            );
            if (providers.length === 1) {
              message = `You already have an account with a different login. Plese sign in again with ${providers[0]}.`;
            } else {
              message = `You already have an account with a different login. Please sign in again using one of ${providers.join(
                ', '
              )}.`;
            }
            break;
          }
          case 'auth/auth-domain-config-required':
            // This is a developer error, and the true reason should be hidden from the user.
            break;
          case 'auth/cancelled-popup-request':
            // This means that multiple popups were requested. Just let the last one do its thing.
            return;
          case 'auth/invalid-email':
            message =
              'The email address you provided is not valid. Please check the spelling or re-type your email address.';
            break;
          case 'auth/operation-not-allowed':
            // This is a developer error, and the true reason should be hidden from the user.
            break;
          case 'auth/operation-not-supported-in-this-environment':
            // This is a developer error, and the true reason should be hidden from the user.
            break;
          case 'auth/popup-blocked':
            message =
              'The sign-in popup was blocked. Please allow popups for this site and try again.';
            break;
          case 'auth/popup-closed-by-user':
            // The user closed the popup explicitly. No error message is needed.
            return;
          case 'auth/unauthorized-domain':
            // This is a developer error, and the true reason should be hidden from the user.
            break;
          case 'auth/user-disabled':
            message =
              'Your account has been disabled. To re-enable your account, please contact support.';
            break;
          case 'auth/user-not-found':
            message =
              'The email address you provided is not recognized. Please check the spelling or register a new account.';
            break;
          case 'auth/wrong-password':
            message =
              'The password you provided is incorrect. Please re-type your password.';
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
    }
  }

  private getCredentialFromError(e: AuthError): AuthCredential | null {
    // eslint-disable-next-line no-underscore-dangle, @typescript-eslint/no-explicit-any
    const providerId = (e.customData as any)._tokenResponse.providerId;
    switch (providerId) {
      case 'facebook.com':
        return FacebookAuthProvider.credentialFromError(e);
      case 'google.com':
        return GoogleAuthProvider.credentialFromError(e);
      case 'password':
        return EmailAuthProvider.credential(
          e.customData.email as string,
          this.user.password
        );
      default:
        return null;
    }
  }
}
