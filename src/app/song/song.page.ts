import { Component } from '@angular/core';
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
  IonIcon,
  IonButton,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { caretDownCircleOutline, caretUpCircleOutline } from 'ionicons/icons';

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
    IonIcon,
    IonButton,
  ],
})
export default class SongPage {
  protected arrangements = [
    { id: 1, author: 'First Name', score: 50 },
    { id: 2, author: 'Second Name', score: 40 },
    { id: 3, author: 'Third Name', score: 20 },
    { id: 4, author: 'Fourth Name', score: 0 },
    { id: 5, author: 'Fifth Name', score: -3 },
  ];

  constructor() {
    addIcons({ caretUpCircleOutline, caretDownCircleOutline });
  }
}
