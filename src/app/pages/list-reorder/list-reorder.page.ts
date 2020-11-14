import { Component, OnInit, ViewChild } from '@angular/core';
import { IonReorderGroup } from '@ionic/angular';
import { ItemReorderEventDetail } from '@ionic/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  ListAnimes: string[] = [
   'Naruto', 'Dragon Ball',
   'Bleach', 'Blood+', 'Digimon'
  ];

  @ViewChild('ListAnime') reorderGroup: IonReorderGroup;

  constructor() { }

  ngOnInit() {
  }

  doReorder(ev: CustomEvent<ItemReorderEventDetail>) {

    /* console.log('Before',this.ListAnimes); 
       this.ListAnimes = ev.detail.complete(this.ListAnimes);
    */

    const moveItems = this.ListAnimes.splice( ev.detail.from, 1 ) [0];
    this.ListAnimes.splice(ev.detail.to, 0, moveItems);
    
    ev.detail.complete();

    console.log('Despues', this.ListAnimes);


  }

  toggleList() {
    this.reorderGroup.disabled = !this.reorderGroup.disabled;
  }

}
