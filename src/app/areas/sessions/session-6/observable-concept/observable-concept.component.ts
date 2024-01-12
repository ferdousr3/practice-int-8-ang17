import { Component } from '@angular/core';
import { OptimizeImg } from '../../../../shared/components/image/image.component';

@Component({
  selector: 'app-observable-concept',
  standalone: true,
  imports: [OptimizeImg],
  templateUrl: './observable-concept.component.html',
  styleUrl: './observable-concept.component.css'
})
export class ObservableConceptComponent {
  asyncImage: string = './assets/images/observable/observable.png';
  observableImage: string = './assets/images/observable/observables.png';
}
