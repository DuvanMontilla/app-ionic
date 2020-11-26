import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {

  items: any[] = [];
  animation: string = "animate__animated animate__fadeIn";

  constructor() { }

  ngOnInit() {
  }

  doRefresh(event: any) {

    setTimeout(() => {
      this.items = Array(20);
      this.animation;
      event.target.complete();
    }, 2000);    
  }

}
