import { Component, Input } from '@angular/core';

@Component({
  selector: 'section-title',
  standalone: true,
  imports: [],
  templateUrl: './section-title.component.html',
  styleUrl: './section-title.component.css',
})
export class SectionTitleComponent {
  @Input()
  title: string = '';
}
