import { Component } from '@angular/core';
import { IonCol, IonContent, IonGrid, IonHeader, IonRow, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomePage {
  protected items = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];
}