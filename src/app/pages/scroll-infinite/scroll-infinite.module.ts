import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScrollInfinitePageRoutingModule } from './scroll-infinite-routing.module';

import { ScrollInfinitePage } from './scroll-infinite.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ScrollInfinitePageRoutingModule
  ],
  declarations: [ScrollInfinitePage]
})
export class ScrollInfinitePageModule {}
