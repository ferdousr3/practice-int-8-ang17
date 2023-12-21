import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICourse } from '../../sessionThreeData';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
})
export class CourseCardComponent {

  @Input() allCourses: ICourse[] = [];

  @Output() myData = new EventEmitter<string>();
  
  public btnClick(): void {
    this.myData.emit('data coming from child');
  }
}
