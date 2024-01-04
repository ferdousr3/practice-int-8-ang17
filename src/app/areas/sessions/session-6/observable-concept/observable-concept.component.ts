import { Component } from '@angular/core';

@Component({
  selector: 'app-observable-concept',
  standalone: true,
  imports: [],
  templateUrl: './observable-concept.component.html',
  styleUrl: './observable-concept.component.css'
})
export class ObservableConceptComponent {
  asyncImage: string = './assets/images/observable/observable.png';
  observableImage: string = './assets/images/observable/observables.png';
}
