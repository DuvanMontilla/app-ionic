import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
import { SearchPage } from '../search/search.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'schedule',
        loadChildren: () => import('../search/search.module').then( m => m.SearchPageModule)
      },
      {
        path: 'speakers',
        loadChildren: () => import('../popover/popover.module').then( m => m.PopoverPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/schedule',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
