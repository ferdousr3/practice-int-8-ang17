import { Component } from '@angular/core';
import { OfferHeaderComponent } from '../../../../shared/component/offer-header/offer-header.component';
import { MonthlyCourseComponent } from './monthly-course/monthly-course.component';
import { OfferCourseComponent } from './offer-course/offer-course.component';

@Component({
  selector: 'app-all-services',
  standalone: true,
  imports: [OfferHeaderComponent, OfferCourseComponent, MonthlyCourseComponent],
  templateUrl: './all-services.component.html',
  styleUrl: './all-services.component.css',
})
export class AllServicesComponent {}
