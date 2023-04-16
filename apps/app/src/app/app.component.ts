import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
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
  constructor(protected auth: Auth) {}

  signOut() {
    this.auth.signOut();
  }
}
