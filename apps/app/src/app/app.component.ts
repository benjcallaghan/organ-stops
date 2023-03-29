import { AsyncPipe, NgIf } from '@angular/common';
import { Component, EnvironmentInjector } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, NgIf, AsyncPipe],
})
export class AppComponent {
  constructor(
    public auth: AngularFireAuth,
    protected environmentInjector: EnvironmentInjector
  ) {}

  signOut() {
    this.auth.signOut();
  }
}
