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
  IonNote,
  IonButtons,
  IonBackButton,
} from '@ionic/angular/standalone';

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
    IonNote,
    IonButtons,
    IonBackButton,
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
}
