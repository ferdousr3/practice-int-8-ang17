import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../section-title/section-title.component';
import { ICourse, SessionThreeData } from '../../sessionThreeData';
import { CourseCardComponent } from '../course-card/course-card.component';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CourseCardComponent, SectionTitleComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent {
  public allCourses: ICourse[] = SessionThreeData.courses.slice(0, 3);
  childDatas: string = '';

  childData($event: any): void {
    // console.log($event);
    this.childDatas = $event;
  }
}
