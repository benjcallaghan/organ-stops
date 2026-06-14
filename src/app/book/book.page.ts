import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
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
import { Songs } from '../songs';

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
  #route = inject(ActivatedRoute);
  #routeParams = toSignal(this.#route.params);
  #bookId = computed(() => Number(this.#routeParams()?.['bookId']));

  #songs = inject(Songs);
  protected songs = this.#songs.getSongs(this.#bookId);
}
