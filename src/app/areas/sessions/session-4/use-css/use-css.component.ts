import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-use-css',
  standalone: true,
  imports: [],
  templateUrl: './use-css.component.html',
  styleUrl: './use-css.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UseCssComponent {

}
