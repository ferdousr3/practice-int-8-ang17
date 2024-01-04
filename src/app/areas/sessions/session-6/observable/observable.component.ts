import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.css',
})
export class ObservableComponent {
  data: any = [];

  //1. Create observable

  // Observable
  // Event emitter (next event emit)
  newObservable = new Observable((observer) => {
    // observer.next([1, 2, 3, 4, 5, 6, 7, 8]);
    // observer.next(1);
    // observer.next(2);
    // observer.next(3);
    // observer.next(4);
    // observer.next(5);
    // observer.next(6);
    // setTimeout(()=>{observer.next(1)}, 1000)
    // setTimeout(()=>{observer.next(2)}, 2000)
    // setTimeout(()=>{observer.next(3)}, 3000)
    // setTimeout(()=>{observer.next(4)}, 4000)
    // setTimeout(()=>{observer.next(5)}, 5000)
    // setTimeout(()=>{observer.next(6)}, 6000)
    setTimeout(() => {
      observer.next(1);
    }, 1000);
    setTimeout(() => {
      observer.next(2);
    }, 2000);
    setTimeout(() => {
      observer.next(3);
    }, 3000);
    // setTimeout(() => {
    //   observer.error(new Error('wrong please try again'));
    // }, 3000);
    setTimeout(() => {
      observer.next(4);
    }, 4000);
    setTimeout(() => {
      observer.next(5);
    }, 5000);
    setTimeout(() => {
      observer.next(6);
    }, 6000);
    setTimeout(() => {
      observer.complete();
    }, 4000);
  });

  //Observer
  // Event listener
  // next, error, complete
  // getData() {
  //   this.newObservable.subscribe(
  //     //handler
  //     (val: any) => {
  //       // this.data = val;
  //       this.data.push(val);
  //     }
  //   );
  // }
  getData() {
    this.newObservable.subscribe({
      next:(val:any)=>{
        this.data.push(val);
      },error(err){
        alert(err.message);  
      },complete(){
         alert('Data Complete');
      }
    })
  }
}
