import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  Listpersons = [];

  dataInfoPage = {
    mainCourse: 'fried chicken',
    desert: 'chocolate cake'
  };

  @Input() name: string;
  @Input() lastName: string;


  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams
  ) { 

    this.Listpersons = this.navParams.get('data');
    /*console.log('personas', this.Listpersons); */
  }

  ngOnInit() {
  }

  closeModal() {
    this.modalCtrl.dismiss(this.dataInfoPage);
  }



}
