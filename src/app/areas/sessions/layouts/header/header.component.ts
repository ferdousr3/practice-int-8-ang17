import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'session-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class SessionHeaderComponent {
  // constructor(private router: Router) {}
  private router = inject(Router);

  goBack() {
    this.router.navigate(['/']);
  }
}
