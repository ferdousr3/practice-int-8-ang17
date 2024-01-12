import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-section-title',
  standalone: true,
  imports: [],
  template: `
    <h1 class=" mb-4 text-lg font-normal">
      {{ sectionText }}
    </h1>
  `,
})
export class PageSectionTitleComponent {
  @Input() sectionText: string = '';
}
