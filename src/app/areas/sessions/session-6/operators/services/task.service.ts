import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  //  createTask: EventEmitter<string> = new EventEmitter<string>();
  //  onCreateTask(val: string) {
  //    this.createTask.emit(val);
  //  }
  createTask = new Subject();
  onCreateTask(val: string) {
    this.createTask.next(val);
  }
}
