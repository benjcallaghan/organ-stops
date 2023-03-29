import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Arrangement, emptyArrangement, emptyHymn, Hymn } from '../hymn';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';

type EditHymn = {
  key: string;
  hymn: Hymn;
  arrangement: Arrangement;
  readonly: boolean;
};

@Component({
    selector: 'app-edit-arrangement',
    templateUrl: './edit-arrangement.page.html',
    styleUrls: ['./edit-arrangement.page.scss'],
    standalone: true,
    imports: [NgIf, IonicModule, FormsModule, NgFor, AsyncPipe]
})
export default class EditArrangementPage {
  edit$: Observable<EditHymn>;

  constructor(
    private route: ActivatedRoute,
    private db: AngularFireDatabase,
    private auth: AngularFireAuth
  ) {
    this.edit$ = route.paramMap.pipe(
      switchMap((params) => {
        const hymnKey = params.get('hymnKey');
        if (!hymnKey) {
          return of({
            key: '',
            hymn: { ...emptyHymn },
            arrangement: { ...emptyArrangement },
            readonly: false,
          });
        }

        // Either both keys are set, or neither key is set.
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const arrangementKey = params.get('arrangementKey')!;
        return db
          .object<Hymn>(`/hymns/${hymnKey}`)
          .valueChanges()
          .pipe(
            map((hymn) => ({
              key: hymnKey,
              hymn: hymn ?? { ...emptyHymn },
              arrangement: hymn?.arrangements[arrangementKey] ?? {
                ...emptyArrangement,
              },
              readonly: !!hymn,
            }))
          );
      })
    );
  }

  async save(edit: EditHymn) {
    // The AuthGuard ensures we are always logged in at this page.
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const user = (await this.auth.currentUser)!;
    const params = this.route.snapshot.paramMap;

    const hymnKey = params.get('hymnKey');
    const arrangementKey = params.get('arrangementKey');

    if (edit.arrangement.user.id === user.uid) {
      // If the user matches, then it must be an existing arrangement.
      await this.db
        .object(`/hymns/${hymnKey}/arrangements/${arrangementKey}`)
        .set(edit.arrangement);
    } else {
      // If the user does not match, then it must be a new arrangement (possibly existing hymn).
      const names = user.displayName?.split(' ') ?? 'Anonymous';
      edit.arrangement.user = {
        id: user.uid,
        name: `${names[0]} ${names[names.length - 1][0]}.`,
      };

      if (hymnKey) {
        await this.db
          .list(`/hymns/${hymnKey}/arrangements`)
          .push(edit.arrangement);
      } else {
        const saved = await this.db.list('/hymns').push(edit.hymn);
        await saved.child('/arrangements').push(edit.arrangement);
      }
    }
  }
}
