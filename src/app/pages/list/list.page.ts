import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  listUsuarios: Observable<any>;

  @ViewChild(IonList) ionList: IonList;

  constructor( private dataService: DataService,
    public alertController: AlertController
    ) { }

  ngOnInit() {
     
    this.listUsuarios = this.dataService.getUsuarios();
/*      .subscribe(data => {
      this.listUsuarios = data;
      }); */
  }

  favorite(item: any) {
    console.log('favorite', item);
    this.ionList.closeSlidingItems();
    
  }

  share(item: any) {
    console.log('share', item);
    this.ionList.closeSlidingItems();
  }

  trash(item: any) {
    //console.log('delete', item.name);
    this.presentAlertConfirm(item);
  }


  //Alerta de confirmación
  async presentAlertConfirm(item: any) {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      backdropDismiss: false,
      header: 'Confirma!',
      message: 'Eliminar <strong>'+item.name+'</strong>!!!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Okay', item.name);
            this.ionList.closeSlidingItems(); 
          }
        }
      ]
    });

    await alert.present();
  }


}
