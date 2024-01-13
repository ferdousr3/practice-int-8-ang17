import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ICourse, SessionThreeData } from '../sessionThreeData';
import { CourseCardComponent } from '../inputs/course-card/course-card.component';
import { PageSectionTitleComponent } from '../../../../shared/components/page-section-title/page-section-title.component';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [CourseCardComponent,PageSectionTitleComponent],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

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
