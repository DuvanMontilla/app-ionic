import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScrollInfinitePage } from './scroll-infinite.page';

const routes: Routes = [
  {
    path: '',
    component: ScrollInfinitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScrollInfinitePageRoutingModule {}
