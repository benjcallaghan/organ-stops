import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Songs {
  #books = signal([
    {
      id: 1,
      name: 'First',
    },
    {
      id: 2,
      name: 'Second',
    },
    {
      id: 3,
      name: 'Third',
    },
    {
      id: 4,
      name: 'Fourth',
    },
    {
      id: 5,
      name: 'Fifth',
    },
  ]);
  books = this.#books.asReadonly();
}
