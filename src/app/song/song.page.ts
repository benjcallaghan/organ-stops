import { Component, computed, inject } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonAccordionGroup,
  IonAccordion,
  IonItem,
  IonLabel,
  IonButtons,
  IonBackButton,
  IonBadge,
  IonModal,
  IonButton,
} from '@ionic/angular/standalone';
import { OverlayEventDetail } from '@ionic/core/components';
import { ArrangementComponent } from '../arrangement/arrangement.component';
import { EditStopsPage } from '../edit-stops/edit-stops.page';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { Arrangement, Songs } from '../songs';

@Component({
  selector: 'app-song',
  templateUrl: './song.page.html',
  styleUrls: ['./song.page.css'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonAccordionGroup,
    IonAccordion,
    IonItem,
    IonLabel,
    IonButtons,
    IonBackButton,
    IonBadge,
    ArrangementComponent,
    IonModal,
    EditStopsPage,
    IonButton,
  ],
})
export default class SongPage {
  #route = inject(ActivatedRoute);
  #routeParams = toSignal(this.#route.params);
  #bookId = computed(() => Number(this.#routeParams()?.['bookId']));
  #songId = computed(() => Number(this.#routeParams()?.['songId']));

  protected parentRoutePath = computed(() => `/books/${this.#bookId()}`);

  #songs = inject(Songs);
  protected arrangements = this.#songs.getArrangements(
    this.#bookId,
    this.#songId,
  );

  updateUserScore(arrangement: Arrangement, userScore: number) {
    this.#songs.updateUserScore(this.#bookId(), this.#songId(), arrangement.id, userScore);
  }

  updateStops(event: CustomEvent<OverlayEventDetail>) {
    if (event.detail.role === 'cancel') {
      return;
    }

    console.log(event.detail.data);
    //this.#songs.addArrangement(this.#bookId(), this.#songId());
  }
}
