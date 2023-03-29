import { AsyncPipe, NgFor } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Auth, User, user } from '@angular/fire/auth';
import {
  Database,
  listVal,
  orderByChild,
  query,
  ref,
} from '@angular/fire/database';
import { RouterLink } from '@angular/router';
import { IonicModule, IonSegment } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import { Hymn } from '../hymn';

interface KeyedHymn extends Hymn {
  key: string;
}

@Component({
  selector: 'app-songs',
  templateUrl: 'songs.page.html',
  styleUrls: ['songs.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, NgFor, AsyncPipe],
})
export default class SongsPage implements AfterViewInit {
  @ViewChild(IonSegment) sortSegment: IonSegment;
  hymns$: Observable<KeyedHymn[]>;
  user$: Observable<User>;

  constructor(private db: Database, auth: Auth) {
    this.user$ = user(auth);
  }

  ngAfterViewInit() {
    this.hymns$ = this.sortSegment.ionChange.pipe(
      map((event) => event.detail.value),
      startWith('number'),
      switchMap((sortBy) =>
        listVal<KeyedHymn>(
          query(ref(this.db, '/hymns'), orderByChild(sortBy)),
          {
            keyField: 'key',
          }
        )
      )
    );
  }
}
