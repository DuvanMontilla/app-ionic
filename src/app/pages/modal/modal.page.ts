import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  personas = [
    {name: 'Duvan', edad: '19'},
    {name: 'Adriana', edad: '24'},
    {name: 'Lorena', edad: '26'},
    {name: 'Juan', edad: '19'}
  ];

  dataInfoPage: string;

  constructor( 
    private modalCtrl: ModalController
   ) { }

  ngOnInit() {
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      cssClass: '',
      componentProps: {
       data: this.personas,
       name: 'Duvan',
       lastName: 'Montilla'
      }
    });
      // dispara cuando esta apunto de cerrar el modalInfoPage
      modal.onWillDismiss().then(dataReturned => {
      this.dataInfoPage = dataReturned.data;
      console.log('Receive: ', this.dataInfoPage);
    });

     await modal.present();
  }



}
