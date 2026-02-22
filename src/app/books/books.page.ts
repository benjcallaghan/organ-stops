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
  templateUrl: './books.page.html',
  styleUrl: './books.page.css',
})
export class BooksPage {
  protected books = [
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
