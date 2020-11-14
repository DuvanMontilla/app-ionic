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
  },
  {
    name: 'Avatar',
    icon: 'person-circle',
    redirectTo: '/avatar',
  },
  {
    name: 'Buttons',
    icon: 'ellipse',
    redirectTo: '/buttons',
  },
  {
    name: 'Cards',
    icon: 'card',
    redirectTo: '/cards',
  },
  {
    name: 'Check',
    icon: 'checkbox',
    redirectTo: '/check',
  },
  {
    name: 'Datepicker',
    icon: 'calendar',
    redirectTo: '/datepicker',
  },
  {
    name: 'Float Action Button',
    icon: 'add-circle',
    redirectTo: '/fab',
  },
  {
    name: 'Grid',
    icon: 'grid',
    redirectTo: '/grid',
  },
  {
    name: 'scroll-infinite',
    icon: 'remove',
    redirectTo: '/scroll-infinite',
  },
  {
    name: 'Inputs',
    icon: 'tablet-landscape',
    redirectTo: '/input',
  },
  {
    name: 'List',
    icon: 'list',
    redirectTo: '/list',
  },
  {
    name: 'List-Reorder',
    icon: 'ellipsis-vertical',
    redirectTo: '/list-reorder',
  }

];

  constructor() { }

  ngOnInit() {
  }

}
