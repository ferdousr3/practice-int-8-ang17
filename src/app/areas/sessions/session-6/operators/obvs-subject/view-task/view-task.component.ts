import { Component, OnInit, inject } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'view-task',
  standalone: true,
  imports: [],
  templateUrl: './view-task.component.html',
  styleUrl: './view-task.component.css',
})
export class ViewTaskComponent implements OnInit {
  task: string[] = ['task-1', 'task-2', 'task-3', 'task-4'];
  taskService: TaskService = inject(TaskService);

  ngOnInit(): void {
    this.taskService.createTask.subscribe((val: any) => {
      this.task.push(val);
    });
  }
}
