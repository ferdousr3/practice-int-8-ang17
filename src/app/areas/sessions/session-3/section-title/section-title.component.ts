import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'section-title',
  standalone: true,
  imports: [],
  templateUrl: './section-title.component.html',
  styleUrl: './section-title.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class SectionTitleComponent {
  @Input()
  title: string = '';
}
