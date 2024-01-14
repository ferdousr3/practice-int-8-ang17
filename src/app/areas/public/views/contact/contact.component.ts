import { Component } from '@angular/core';
import { TooltipDirective } from '../../../../shared/components/tooltip/tooltip.directive';
import { TooltipModule } from '../../../../shared/components/tooltip/tooltip.module';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TooltipModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  providers: [TooltipDirective]
})
export class ContactComponent {

}
