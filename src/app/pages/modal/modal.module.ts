import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPageRoutingModule } from './modal-routing.module';

import { ComponentsModule } from '../../components/components.module';

//Modals
import { ModalPage } from './modal.page';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@NgModule({
  declarations: [ModalPage,ModalInfoPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ModalPageRoutingModule
  ]
})
export class ModalPageModule {}
