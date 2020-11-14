import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.page.html',
  styleUrls: ['./datepicker.page.scss'],
})
export class DatepickerPage implements OnInit {

  fechaActual: Date = new Date();
  customPickerOptions: any;

  constructor() {

/*     this.customPickerOptions = {
      backdropDismiss: false,
      buttons: [
        {
        text: 'Aceptar',
        handler: (data:any) => {
          console.log('Data!', data);
        }
      }, {
        text: 'Cancelar',
        handler: () => {
          console.log('Do not Dismiss.');
          return false;
        }
      }],
      
    } */

   }

  ngOnInit() {
  }

  changeDate(date: any){
    console.log('fecha', date);
  }

}
