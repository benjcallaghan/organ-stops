import { computed, Injectable, Signal, signal } from '@angular/core';

export type StopsMap = Record<string, string[]>;

export interface Arrangement {
  id: number;
  author: string;
  score: number;
  lastUpdated: Date;
  stops: StopsMap;
  userScore: number;
}

export interface Song {
  id: number;
  page: number;
  name: string;
  arrangements: Arrangement[];
}

export interface Book {
  id: number;
  name: string;
  songs: Song[];
}

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
        this.getSongs(bookId)()?.find((s) => s.id === songId())?.arrangements,
    );
  }

  updateUserScore(
    bookId: number,
    songId: number,
    arrangementId: number,
    userScore: number,
  ) {
    this.#books.update((books) => {
      const bookIndex = books.findIndex((b) => b.id === bookId);
      const oldBook = books[bookIndex];

      const songIndex = oldBook.songs.findIndex((s) => s.id === songId);
      const oldSong = oldBook.songs[songIndex];

      const arrangementIndex = oldSong.arrangements.findIndex(
        (a) => a.id === arrangementId,
      );
      const oldArrangement = oldSong.arrangements[arrangementIndex];

      const newArrangement: Arrangement = {
        ...oldArrangement,
        lastUpdated: new Date(),
        userScore,
        score: oldArrangement.score + (userScore - oldArrangement.userScore),
      };
      const newSong: Song = {
        ...oldSong,
        arrangements: oldSong.arrangements.toSpliced(
          arrangementIndex,
          1,
          newArrangement,
        ),
      };
      const newBook: Book = {
        ...oldBook,
        songs: oldBook.songs.toSpliced(songIndex, 1, newSong),
      };
      return books.toSpliced(bookIndex, 1, newBook);
    });
  }

  addArrangement(bookId: number, songId: number) {
    this.#books.update((books) => {
      const bookIndex = books.findIndex((b) => b.id === bookId);
      const oldBook = books[bookIndex];

      const songIndex = oldBook.songs.findIndex((s) => s.id === songId);
      const oldSong = oldBook.songs[songIndex];

      const newArrangement: Arrangement = {
        id: this.#nextId++,
        author: 'Current User',
        lastUpdated: new Date(),
        score: 0,
        stops: {},
        userScore: 0,
      };
      const newSong: Song = {
        ...oldSong,
        arrangements: [...oldSong.arrangements, newArrangement],
      };
      const newBook: Book = {
        ...oldBook,
        songs: oldBook.songs.toSpliced(songIndex, 1, newSong),
      };
      return books.toSpliced(bookIndex, 1, newBook);
    });
  }

  #createBook(): Book {
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

  #createSong(): Song {
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
