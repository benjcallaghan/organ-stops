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

  getArrangements(bookId: Signal<number>, songId: Signal<number>) {
    return computed(
      () =>
        this.books()
          .find((b) => b.id === bookId())
          ?.songs.find((s) => s.id === songId())?.arrangements,
    );
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
      name: `Song ${id}`,
      arrangements: [
        {
          id: 1,
          author: 'First Name',
          score: 50,
          lastUpdated: new Date(),
          stops: {
            Pedal: [
              'Diapason 16',
              'Flute 8',
              'Choral Bass 4',
              'More',
              'MORE',
              'MORE!!!!',
            ],
            Swell: ['Viola Pomposa 8', 'Octave 4'],
            Great: ['Diapason 8', 'Harmonic Flute 8', 'Fifteenth 2'],
          },
          userScore: 1,
        },
        {
          id: 2,
          author: 'Second Name',
          score: 40,
          lastUpdated: new Date(),
          stops: {},
          userScore: 0,
        },
        {
          id: 3,
          author: 'Third Name',
          score: 20,
          lastUpdated: new Date(),
          stops: {},
          userScore: 0,
        },
        {
          id: 4,
          author: 'Fourth Name',
          score: 0,
          lastUpdated: new Date(),
          stops: {},
          userScore: 0,
        },
        {
          id: 5,
          author: 'Fifth Name',
          score: -3,
          lastUpdated: new Date(),
          stops: {},
          userScore: -1,
        },
      ],
    };
  }
}
