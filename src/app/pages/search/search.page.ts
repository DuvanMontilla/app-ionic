import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  listAlbums: any = [];
  textoBuscar: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getAlbums()
    .subscribe(data => {
      console.log('albumnes', data);
     this.listAlbums = data;
 });
  }

  searchAlbums(event: any) {

    this.textoBuscar = event.detail.value;
    console.log('resultados', event.detail.value);
    
  }



}
