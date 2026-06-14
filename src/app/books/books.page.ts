import { Component, inject } from '@angular/core';
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
import { Songs } from '../songs';

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
  readonly #songs = inject(Songs);
  protected books = this.#songs.books;
}
