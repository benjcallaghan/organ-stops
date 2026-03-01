import { Component } from '@angular/core';
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
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-edit-arrangement',
  templateUrl: './edit-arrangement.page.html',
  styleUrls: ['./edit-arrangement.page.css'],
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
export class EditArrangementPage {}
