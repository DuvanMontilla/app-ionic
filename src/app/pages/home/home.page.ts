import { Component, OnInit } from '@angular/core';

interface Componente {
  name: string,
  icon: string,
  redirectTo: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  lista: Componente[] = [
    {
    name: 'Action-Sheet',
    icon: 'american-football',
    redirectTo: '/action-sheet',
  },
  {
    name: 'Alerts',
    icon: 'notifications-circle',
    redirectTo: '/alerts',
  }
];

  constructor() { }

  ngOnInit() {
  }

}
