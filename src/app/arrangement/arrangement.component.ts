import { Component, computed, input } from '@angular/core';
import {
  IonButton,
  IonIcon,
  IonBadge,
  IonListHeader,
  IonList,
  IonLabel,
  IonItem,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  caretDownCircle,
  caretDownCircleOutline,
  caretUpCircle,
  caretUpCircleOutline,
} from 'ionicons/icons';

export interface Arrangement {
  id: number;
  author: string;
  score: number;
  lastUpdated: Date;
  stops: Record<string, string[]>;
  userScore: number;
}

@Component({
  selector: 'app-arrangement',
  templateUrl: './arrangement.component.html',
  styleUrls: ['./arrangement.component.css'],
  standalone: true,
  imports: [
    IonButton,
    IonIcon,
    IonBadge,
    IonListHeader,
    IonList,
    IonLabel,
    IonItem,
  ],
})
export class ArrangementComponent {
  arrangement = input.required<Arrangement>();
  protected upvoteOptions = computed(() =>
    this.arrangement().userScore === 1
      ? {
          label: 'Upvoted',
          icon: 'caret-up-circle',
          color: 'warning',
        }
      : {
          label: 'Upvote',
          icon: 'caret-up-circle-outline',
          color: 'secondary',
        },
  );
  protected downvoteOptions = computed(() =>
    this.arrangement().userScore === -1
      ? {
          label: 'Downvoted',
          icon: 'caret-down-circle',
          color: 'warning',
        }
      : {
          label: 'Downvote',
          icon: 'caret-down-circle-outline',
          color: 'secondary',
        },
  );

  constructor() {
    addIcons({
      caretDownCircle,
      caretDownCircleOutline,
      caretUpCircle,
      caretUpCircleOutline,
    });
  }
}
