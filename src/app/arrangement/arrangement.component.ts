import { Component, input } from '@angular/core';
import {
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonBadge,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { caretDownCircleOutline, caretUpCircleOutline } from 'ionicons/icons';

export interface Arrangement {
  id: number;
  author: string;
  score: number;
  lastUpdated: Date;
  stops: Record<string, string[]>;
}

@Component({
  selector: 'app-arrangement',
  templateUrl: './arrangement.component.html',
  styleUrls: ['./arrangement.component.css'],
  standalone: true,
  imports: [IonToolbar, IonButtons, IonButton, IonIcon, IonBadge],
})
export class ArrangementComponent {
  arrangement = input.required<Arrangement>();

  constructor() {
    addIcons({ caretDownCircleOutline, caretUpCircleOutline });
  }
}
