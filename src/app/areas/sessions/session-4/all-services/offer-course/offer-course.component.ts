import { Component, inject } from '@angular/core';
import { SubscribeService } from '../../../../../shared/services/subscribe.service';

@Component({
  selector: 'offer-course',
  standalone: true,
  imports: [],
  templateUrl: './offer-course.component.html',
  styleUrl: './offer-course.component.css',
})
export class OfferCourseComponent {
  private subscribeOffer = inject(SubscribeService);

  onSubscribeOffer(){
    this.subscribeOffer.subscribe('One Year')
  }
}
