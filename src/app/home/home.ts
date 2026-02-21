import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonRow,
  IonTitle,
  IonToolbar,
  IonThumbnail,
  IonItem,
  IonLabel,
  IonRouterLink,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonGrid,
    IonRow,
    IonCol,
    IonThumbnail,
    IonItem,
    IonLabel,
    RouterLink,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomePage {
  protected items = [
    {
      id: 1,
      name: 'First',
    },
    {
      id: 2,
      name: 'Second',
    },
    {
      id: 3,
      name: 'Third',
    },
    {
      id: 4,
      name: 'Fourth',
    },
    {
      id: 5,
      name: 'Fifth',
    },
  ];
}
