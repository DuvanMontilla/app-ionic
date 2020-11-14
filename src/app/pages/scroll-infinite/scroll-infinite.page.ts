import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-scroll-infinite',
  templateUrl: './scroll-infinite.page.html',
  styleUrls: ['./scroll-infinite.page.scss'],
})
export class ScrollInfinitePage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    console.log('scroll', this.infiniteScroll.disabled);
    
  }


  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      if (event.length == 12) {
        event.target.complete();
        event.target.disabled = true;
      }
    }, 500);
  }

}
