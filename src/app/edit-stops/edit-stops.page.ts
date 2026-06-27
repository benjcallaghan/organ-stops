import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonLabel,
  IonModal,
  IonList,
  IonItemGroup,
  IonItemDivider,
  IonItem,
  IonToggle,
  IonInput,
  IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addCircle } from 'ionicons/icons';
import { StopsMap } from '../songs';

@Component({
  selector: 'app-edit-stops',
  templateUrl: './edit-stops.page.html',
  styleUrls: ['./edit-stops.page.css'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonButtons,
    IonButton,
    IonLabel,
    IonList,
    IonItemGroup,
    IonItemDivider,
    IonItem,
    IonToggle,
    IonInput,
    IonIcon,
  ],
})
export class EditStopsPage {
  readonly #parentModal = inject(IonModal);

  protected readonly stops: StopsMap = {
    Pedal: [
      'Contra Violone 32',
      'Diapason 16',
      'Bourdon 16',
      'Lieblich Gedackt 16',
      'Octave 8',
      'Flute 8',
      'Choral Bass 4',
      'Mixture III',
      'Posaune 16',
      'Waldhorn 16',
      'French Trumpet 8',
      'Great to Pedal',
      'Swell to Pedal',
    ],
    Swell: [
      'Lieblich Gedackt 16',
      'Gedackt 8',
      'Viola Pomposa 8',
      'Viola Celeste 8',
      'Flute Celeste II 8',
      'Octave 4',
      'Traverse Flute 4',
      'Nasard 2 ⅔',
      'Piccolo 2',
      'Tierce 1 ⅗',
      'Fourniture IV',
      'Waldhorn 16',
      'Tromba 8',
      'Oboe 8',
      'Tremulant',
    ],
    Great: [
      'Violone 16',
      'Diapason 8',
      'Harmonic Flute 8',
      'Flute Celeste II 8',
      'Octave 4',
      'Spitzflöte 4',
      'Fifteenth 2',
      'Mixture IV',
      'French Trumpet 8',
      'Krummhorn 8',
      'Chimes',
      'Tremulant',
      'Swell to Great',
    ],
    General: ['Bass Coupler', 'Melody Coupler', 'Alternate Tuning'],
  };

  constructor() {
    addIcons({
      addCircle,
    });
  }

  protected cancel() {
    this.#parentModal.dismiss(null, 'cancel');
  }

  protected save() {
    this.#parentModal.dismiss(null, 'save');
  }

  protected addStop(group: string[], stop: string | number | undefined | null) {
    if (typeof stop === 'string' && stop) {
      group.push(stop);
    }
  }
}
