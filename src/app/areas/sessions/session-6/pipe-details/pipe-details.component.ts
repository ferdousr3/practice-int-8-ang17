import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-details',
  standalone: true,
  imports: [],
  templateUrl: './pipe-details.component.html',
})
export class PipeDetailsComponent {
  pipeImage: string = './assets/images/pipe/pipes.png';
}
