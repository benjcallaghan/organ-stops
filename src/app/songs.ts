import { computed, Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Songs {
  #nextId = 0;

  #books = signal([
    this.#createBook(),
    this.#createBook(),
    this.#createBook(),
    this.#createBook(),
    this.#createBook(),
  ]);
  books = this.#books.asReadonly();

  getSongs(bookId: Signal<number>) {
    return computed(() => this.books().find((b) => b.id === bookId())?.songs);
  }

  #createBook() {
    const id = this.#nextId++;
    return {
      id,
      name: `Book ${id}`,
      songs: [
        { id: 1, page: 1, name: 'First Song' },
        { id: 2, page: 2, name: 'Second Song' },
        { id: 3, page: 3, name: 'Third Song' },
        { id: 4, page: 4, name: 'Fourth Song' },
        { id: 5, page: 5, name: 'Fifth Song' },
        { id: 6, page: 6, name: 'Sixth Song' },
      ],
    };
  }
}
