import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  listAlbums: Observable<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  
    this.listAlbums = this.dataService.getAlbums();
    /*      .subscribe(data => {
          this.listUsuarios = data;
          }); */
  
  }

  searchAlbums(results: any) {
    console.log('resultados', results);

    results = this.listAlbums;
    
  }



}
