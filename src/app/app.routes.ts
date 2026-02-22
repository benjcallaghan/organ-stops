import { Routes } from '@angular/router';
import { BooksPage } from './books/books.page';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full',
  },
  {
    path: 'books',
    component: BooksPage,
  },
  {
    path: 'books/:bookId',
    loadComponent: () => import('./book/book.page'),
  },
  {
    path: 'books/:bookId/songs/:songId',
    loadComponent: () => import('./song/song.page'),
  }
];
