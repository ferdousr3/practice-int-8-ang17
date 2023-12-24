import { Component } from '@angular/core';

@Component({
  selector: 'app-template-ref-va',
  standalone: true,
  imports: [],
  templateUrl: './template-ref-va.component.html',
  styleUrl: './template-ref-va.component.css',
})
export class TemplateRefVaComponent {
  newEmail: string = '';

  changeEmail(value: string) {
    this.newEmail = value;
  }
}
