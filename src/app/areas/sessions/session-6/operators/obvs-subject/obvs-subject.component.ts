import { Component } from '@angular/core';
import { CreateTaskComponent } from './create-task/create-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';

@Component({
  selector: 'app-obvs-subject',
  standalone: true,
  imports: [ViewTaskComponent, CreateTaskComponent],
  templateUrl: './obvs-subject.component.html',
})
export class ObvsSubjectComponent {}
