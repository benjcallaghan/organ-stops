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
} from '@ionic/angular/standalone';

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
  ],
})
export class EditStopsPage {
  private parentModal = inject(IonModal);

  cancel() {
    this.parentModal.dismiss(null, 'cancel');
  }

  save() {
    this.parentModal.dismiss(null, 'save');
  }
}
