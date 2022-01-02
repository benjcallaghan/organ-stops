import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform, public auth: AngularFireAuth) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {});
  }

  signOut() {
    this.auth.signOut();
  }
}
