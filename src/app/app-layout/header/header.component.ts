import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[];
  activeItem: MenuItem;

  constructor() { }

  ngOnInit() {
    this.items = [
      {label: 'Create New Game', icon: 'pi pi-fw pi-home'},
      {label: 'Active Game', icon: 'pi pi-fw pi-calendar'},
      {label: 'All Games', icon: 'pi pi-fw pi-pencil'},
      {label: 'How To Play', icon: 'pi pi-fw pi-file'},
    ];

    this.activeItem = this.items[0];

  }

}
