import { Component, signal } from '@angular/core';
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
} from '@ionic/angular/standalone';
import {
  Arrangement,
  ArrangementComponent,
} from '../arrangement/arrangement.component';

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
  ],
})
export default class SongPage {
  protected arrangements = signal<Arrangement[]>([
    {
      id: 1,
      author: 'First Name',
      score: 50,
      lastUpdated: new Date(),
      stops: {},
      userScore: 1,
    },
    {
      id: 2,
      author: 'Second Name',
      score: 40,
      lastUpdated: new Date(),
      stops: {},
      userScore: 0,
    },
    {
      id: 3,
      author: 'Third Name',
      score: 20,
      lastUpdated: new Date(),
      stops: {},
      userScore: 0,
    },
    {
      id: 4,
      author: 'Fourth Name',
      score: 0,
      lastUpdated: new Date(),
      stops: {},
      userScore: 0,
    },
    {
      id: 5,
      author: 'Fifth Name',
      score: -3,
      lastUpdated: new Date(),
      stops: {},
      userScore: -1,
    },
  ]);

  updateUserScore(arrangement: Arrangement, index: number, userScore: number) {
    // TODO: Write values back to Firestore and let it propagate changes.
    this.arrangements.update(all => {      
      const scoreDiff = userScore - arrangement.userScore;
      const updated = {
        ...arrangement,
        userScore: userScore,
        score: arrangement.score + scoreDiff
      };
      return all.toSpliced(index, 1, updated);
    });
  }
}
