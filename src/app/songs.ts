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
        this.#createSong(),
        this.#createSong(),
        this.#createSong(),
        this.#createSong(),
        this.#createSong(),
        this.#createSong(),
        this.#createSong(),
      ],
    };
  }

  #createSong() {
    const id = this.#nextId++;
    return {
      id,
      page: id,
      name: `Song ${id}`
    };
  }
}
