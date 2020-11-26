import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {

  progress: any;

  constructor() { }

  ngOnInit() {
  }

  range(event: any) {
      this.progress = event.detail.value/100;
  }

}
