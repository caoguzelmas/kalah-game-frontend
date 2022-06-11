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
      {label: 'Create New Game', icon: 'pi pi-fw pi-home', routerLink: 'create'},
      {label: 'Active Game', icon: 'pi pi-fw pi-desktop', routerLink: 'play'},
      {label: 'All Games', icon: 'pi pi-fw pi-list', routerLink: 'search'},
      {label: 'How To Play', icon: 'pi pi-fw pi-file', routerLink: 'how-to-play'},
    ];
  }

}
