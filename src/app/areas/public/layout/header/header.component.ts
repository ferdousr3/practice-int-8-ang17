import { Component } from '@angular/core';
import { HeaderRoutes, IHeaderRoute } from './header.routes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'public-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class PublicHeaderComponent {
  public headerRoutes: IHeaderRoute[] = HeaderRoutes.Routes;
}
