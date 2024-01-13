import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-front-end',
  templateUrl: './front-end.component.html',
  styleUrl: './front-end.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontEndComponent {}
