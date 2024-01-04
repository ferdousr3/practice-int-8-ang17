import { Component } from '@angular/core';
import { Observable, from, of } from 'rxjs';

@Component({
  selector: 'app-obvs-of-from',
  standalone: true,
  imports: [],
  templateUrl: './obvs-of-from.component.html',
  styleUrl: './obvs-of-from.component.css',
})
export class ObvsOfFromComponent {
  data: any = [];

  numberArray: any = [1, 2, 3, 4, 5];
  stringArray: any = ['A', 'B', 'C', 'D'];

  // newObservable = of(this.numberArray, this.stringArray, 'hello', 10)
  // pass only array, string
  newObservable = from(this.numberArray);

  getData() {
    this.newObservable.subscribe({
      next: (val: any) => {
        this.data.push(val);
        console.log(val);
      },
      error(err) {
        alert(err.message);
      },
      complete() {
        alert('Data Complete');
      },
    });
  }
}
