import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverInfoComponent } from 'src/app/components/popover-info/popover-info.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  menuPopover = [
    { name: 'Duvan', phone: '3148858032' },
    { name: 'David', phone: '3146786788' },
    { name: 'Amparo', phone: '908897776' },
    { name: 'Yorman', phone: '3254586569' }
  ]

  constructor(private popoveCtrl: PopoverController) { }

  ngOnInit() {
  }


  async presentPopover(ev: any) {

    console.log('evento', ev);


    const popover = await this.popoveCtrl.create({
      component: PopoverInfoComponent,
      event: ev,
      componentProps: {
        data: this.menuPopover
      },
      backdropDismiss: false,
      translucent: true
    });

    // dispara cuando esta apunto de cerrar el modalInfoPage
    popover.onWillDismiss().then(dataReturned => {
      console.log('Receive: ', dataReturned.data);
    });
    await popover.present();

  //Forma 2 de obtener la data del popoverInfo
  /*const { data } = await popover.onWillDismiss();
  console.log('data recibida de popoverInfo', data); */


  }

}
