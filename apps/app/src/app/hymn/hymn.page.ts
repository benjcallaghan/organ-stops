import { AsyncPipe, KeyValuePipe, NgFor, NgIf } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Auth, User, user } from '@angular/fire/auth';
import { Database, objectVal, ref, remove } from '@angular/fire/database';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AlertController, IonicModule } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Arrangement, Hymn, OrganStop } from '../hymn';
import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-hymn',
  templateUrl: './hymn.page.html',
  styleUrls: ['./hymn.page.scss'],
  standalone: true,
  imports: [NgIf, IonicModule, NgFor, RouterLink, AsyncPipe, KeyValuePipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export default class HymnPage {
  swiperModules = [IonicSlides];
  hymnKey$: Observable<string>;
  user$: Observable<User>;
  hymn$: Observable<Hymn>;

  constructor(
    private db: Database,
    auth: Auth,
    private route: ActivatedRoute,
    private alertController: AlertController
  ) {
    this.hymnKey$ = route.params.pipe(map((params) => params.key));
    this.user$ = user(auth);
    this.hymn$ = this.hymnKey$.pipe(
      switchMap((hymnKey) => objectVal<Hymn>(ref(db, `/hymns/${hymnKey}`)))
    );
  }

  stopsFor(stops: OrganStop[]) {
    return stops
      .filter((stop) => stop.enabled)
      .map((stop) => stop.name)
      .join(', ');
  }

  async remove(arrangement: { key: string; value: Arrangement }) {
    const alert = await this.alertController.create({
      header: 'Are you sure?',
      message:
        'Deleting the arrangement prevents other users from seeing it. This action is irreversible.',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
        },
        {
          text: 'Yes, delete it!',
          role: 'delete',
        },
      ],
    });
    await alert.present();

    const { role } = await alert.onDidDismiss();
    const hymnKey = this.route.snapshot.params.key;

    if (role === 'delete') {
      await remove(
        ref(this.db, `/hymns/${hymnKey}/arrangements/${arrangement.key}`)
      );
    }
  }
}
