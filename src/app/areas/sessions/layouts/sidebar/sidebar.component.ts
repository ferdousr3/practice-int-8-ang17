import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ISidebarRoute, SidebarData } from './sidebara.routesData';
import { NgClass } from '@angular/common';

@Component({
  selector: 'session-sidebar',
  standalone: true,
  imports: [RouterLink, NgClass,RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SessionSidebarComponent {
  public sidebarRoutes: ISidebarRoute[] = SidebarData.SidebarRoutes;

  // isSubmenuOpen: boolean = false;

  // openSubmenu() {
  //   this.isSubmenuOpen = !this.isSubmenuOpen;
  // }
  isSubmenuOpen: number | null = null;

  openSubmenu(index: number): void {
    // Toggle the submenu open/closed state for the clicked index
    this.isSubmenuOpen = this.isSubmenuOpen === index ? null : index;
  }
}
