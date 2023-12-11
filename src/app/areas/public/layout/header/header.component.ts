import { NgClass } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderRoutes, IHeaderRoute } from './header.routes';

@Component({
  selector: 'public-header',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class PublicHeaderComponent {
  public headerRoutes: IHeaderRoute[] = HeaderRoutes.Routes;
  isOpenMenu: boolean = true;

  constructor() {
    
    
  }

  openMenuHandler() {
    this.isOpenMenu = !this.isOpenMenu;
    
  }
}
