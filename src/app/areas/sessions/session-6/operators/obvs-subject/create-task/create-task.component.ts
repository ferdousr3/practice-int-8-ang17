import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'create-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css',
})
export class CreateTaskComponent {
  newTask: string = '';
  taskService: TaskService = inject(TaskService);

  createNewTsk() {
    
    if(this.newTask !==''){
      this.taskService.onCreateTask(this.newTask);
    }
    console.log(this.newTask);
  }
}
