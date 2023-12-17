import { Component } from '@angular/core';
import { ICourse, SessionThreeData } from '../sessionThreeData';
import { CourseCardComponent } from '../inputs/course-card/course-card.component';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [CourseCardComponent],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {
  public courses: ICourse[] = SessionThreeData.courses;

  myName: string = 'Rohim';

  inputData: string = '';

  display = true;

  viewDescription() {
    if (this.display) {
      this.display = false;
    } else {
      this.display = true;
    }
  }
  onChanged(event: any) {
    this.inputData = event.target.value;
  }
}
