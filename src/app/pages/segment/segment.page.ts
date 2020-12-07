import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  ListHeroes: Observable<any[]>;
  textoBuscar: string = '';

  constructor(private dataService: DataService) {
    
  }

  ngOnInit() {
    this.ListHeroes = this.dataService.getHeroes();    
  }

  segmentChanged(event: any) {
    this.textoBuscar = event.detail.value;
  }

}
