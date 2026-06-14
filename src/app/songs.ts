import { Injectable, signal } from '@angular/core';

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

  #createBook() {
    const id = this.#nextId++;
    return {
      id,
      name: `Book ${id}`,
    };
  }
}
