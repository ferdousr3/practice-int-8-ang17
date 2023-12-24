import { Component, inject } from '@angular/core';
import { SubscribeService } from '../../../../../shared/services/subscribe.service';

@Component({
  selector: 'monthly-course',
  standalone: true,
  imports: [],
  templateUrl: './monthly-course.component.html',
  styleUrl: './monthly-course.component.css',
})
export class MonthlyCourseComponent {
  private monthlySubscribe = inject(SubscribeService);

  onSubscribeMonthly() {
    this.monthlySubscribe.subscribe('One Month');
  }
}
