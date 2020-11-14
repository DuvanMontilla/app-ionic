import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  checks = [
    { val: 'Pepperoni', color: 'primary', isChecked: true },
    { val: 'Sausage', color: 'danger', isChecked: false },
    { val: 'Mushroom', color: 'dark', isChecked: false }
  ];

  constructor() { }

  ngOnInit() {
  }

}
