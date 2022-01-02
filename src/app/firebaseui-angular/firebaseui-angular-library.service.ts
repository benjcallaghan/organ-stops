import { Inject, Injectable, NgZone, Optional } from '@angular/core';
import {
  FirebaseApp,
  FirebaseAppConfig,
  FirebaseOptions,
  FIREBASE_APP_NAME,
  FIREBASE_OPTIONS,
  ɵfirebaseAppFactory,
} from '@angular/fire';
import * as firebaseui from 'firebaseui';

@Injectable()
export class FirebaseuiAngularLibraryService {
  public firebaseUiInstance: firebaseui.auth.AuthUI;

  constructor(
    @Inject(FIREBASE_OPTIONS) options: FirebaseOptions,
    @Optional()
    @Inject(FIREBASE_APP_NAME)
    nameOrConfig: string | FirebaseAppConfig | null | undefined,
    zone: NgZone
  ) {
    // noinspection JSNonASCIINames
    const app: FirebaseApp = ɵfirebaseAppFactory(options, zone, nameOrConfig);
    // store the firebaseui instance on the window object to prevent double initialization
    if (!(<any>window).firebaseUiInstance) {
      (<any>window).firebaseUiInstance = new firebaseui.auth.AuthUI(app.auth());
    }
    this.firebaseUiInstance = (<any>window)
      .firebaseUiInstance as firebaseui.auth.AuthUI;
  }
}
