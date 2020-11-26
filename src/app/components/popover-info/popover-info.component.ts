import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent implements OnInit {

  ListContacts = [];

  constructor(
    private navParams: NavParams,
    private popoverCtrl:PopoverController
    ) { 
    this.ListContacts = this.navParams.get('data');
  }

  ngOnInit() {
  }

  onClick(item: any, posicion: number) {
    console.log('item', item);
    console.log('posicion', posicion);

    this.popoverCtrl.dismiss({
      position: posicion
    });

  }

}
