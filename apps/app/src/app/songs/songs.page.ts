import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFireDatabase,
  SnapshotAction,
} from '@angular/fire/compat/database';
import { IonSegment, IonicModule } from '@ionic/angular';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import { Hymn } from '../hymn';
import { NgFor, AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-songs',
  templateUrl: 'songs.page.html',
  styleUrls: ['songs.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, NgFor, AsyncPipe],
})
export default class SongsPage implements AfterViewInit {
  @ViewChild(IonSegment) sortSegment: IonSegment;
  hymns$: Observable<SnapshotAction<Hymn>[]>;
  user$: Observable<firebase.User>;

  constructor(private db: AngularFireDatabase, auth: AngularFireAuth) {
    this.user$ = auth.user;
  }

  ngAfterViewInit() {
    this.hymns$ = this.sortSegment.ionChange.pipe(
      map((event) => event.detail.value),
      startWith('number'),
      switchMap((sortBy) =>
        this.db
          .list<Hymn>('/hymns', (ref) => ref.orderByChild(sortBy))
          .snapshotChanges()
      )
    );
  }
}
