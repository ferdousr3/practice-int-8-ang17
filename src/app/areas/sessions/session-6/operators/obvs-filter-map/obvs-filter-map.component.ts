import { Component } from '@angular/core';
import { filter, from, map } from 'rxjs';

@Component({
  selector: 'app-obvs-filter-map',
  templateUrl: './obvs-filter-map.component.html',
  styleUrl: './obvs-filter-map.component.css',
})
export class ObvsFilterMapComponent {
  data: any = [];

  numberArray: any = [2, 3, 4, 5, 6];

  newObservable = from(this.numberArray);

  transObs = this.newObservable.pipe(
    map((val: any) => {
      return val * 2;
    })
  );

  filterObs = this.transObs.pipe(
    filter((val: any, i) => {
      return val % 3 === 0;
    })
  );

  getData() {
    this.filterObs.subscribe({
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
