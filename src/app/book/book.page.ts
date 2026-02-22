import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonButtons,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-book',
  templateUrl: './book.page.html',
  styleUrls: ['./book.page.css'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonNote,
    IonLabel,
    IonBackButton,
    IonButtons,
    RouterLink,
  ],
})
export default class BookPage {
  protected songs = [
    { id: 1, page: 1, name: 'First Song' },
    { id: 2, page: 2, name: 'Second Song' },
    { id: 3, page: 3, name: 'Third Song' },
    { id: 4, page: 4, name: 'Fourth Song' },
    { id: 5, page: 5, name: 'Fifth Song' },
    { id: 6, page: 6, name: 'Sixth Song' },
  ];
}
