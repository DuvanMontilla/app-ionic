import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FiltroPipe } from './filtro.pipe';

@NgModule({
  declarations: [FiltroPipe],
  imports: [CommonModule],
  exports: [FiltroPipe]
})
export class PipesModule { }
