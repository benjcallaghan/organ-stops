import { Component, EnvironmentInjector } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NgIf, AsyncPipe } from '@angular/common';
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
  constructor(public auth: AngularFireAuth, protected environmentInjector: EnvironmentInjector) {}

  signOut() {
    this.auth.signOut();
  }
}
