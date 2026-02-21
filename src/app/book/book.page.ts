import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-book',
  templateUrl: './book.page.html',
  styleUrls: ['./book.page.css'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonList,
    IonItem,
    IonNote,
    IonLabel,
  ],
})
export default class BookPage {
  private route = inject(ActivatedRoute);
  protected songs = [
    { id: 1, page: 1, name: 'First Song' },
    { id: 2, page: 2, name: 'Second Song' },
    { id: 3, page: 3, name: 'Third Song' },
    { id: 4, page: 4, name: 'Fourth Song' },
    { id: 5, page: 5, name: 'Fifth Song' },
    { id: 6, page: 6, name: 'Sixth Song' },
  ];
}
