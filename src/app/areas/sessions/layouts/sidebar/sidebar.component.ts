import { NgClass, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ISidebarRoute, SidebarData } from './sidebara.routesData';

@Component({
  selector: 'session-sidebar',
  standalone: true,
  imports: [RouterLink, NgClass, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class SessionSidebarComponent {
  public sidebarRoutes: ISidebarRoute[] = SidebarData.SidebarRoutes;

  isSubmenuOpen: { [key: number]: boolean } = {};

  openSubmenu(routeId: number): void {
    this.isSubmenuOpen[routeId] = !this.isSubmenuOpen[routeId];
  }
}
