import { KeyValuePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
} from '@angular/core';
import {
  IonButton,
  IonIcon,
  IonBadge,
  IonListHeader,
  IonList,
  IonLabel,
  IonItem,
  IonText,
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
    KeyValuePipe,
    IonText,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArrangementComponent {
  arrangement = input.required<Arrangement>();
  userVoted = output<number>();

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

  upvote() {
    // Upvote if default or downvoted, clear vote if upvoted.
    const newVote = this.arrangement().userScore === 1 ? 0 : 1;
    this.userVoted.emit(newVote);
  }

  downvote() {
    // Downvote if default or upvoted, clear vote if downvoted.
    const newVote = this.arrangement().userScore === -1 ? 0 : -1;
    this.userVoted.emit(newVote);
  }
}
