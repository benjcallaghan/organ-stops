import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HymnPage } from './hymn.page';

const routes: Routes = [
  {
    path: '',
    component: HymnPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HymnPageRoutingModule {}
