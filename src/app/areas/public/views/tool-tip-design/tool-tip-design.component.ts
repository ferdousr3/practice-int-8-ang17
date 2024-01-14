import { Component, HostListener } from '@angular/core';
import { TooltipPosition } from '../../../../shared/components/tooltip/tooltip.enums';
import { TooltipModule } from '../../../../shared/components/tooltip/tooltip.module';
import { TooltipDirective } from '../../../../shared/components/tooltip/tooltip.directive';

@Component({
  selector: 'app-tool-tip-design',
  standalone: true,
  imports: [TooltipModule],
  templateUrl: './tool-tip-design.component.html',
  styleUrl: './tool-tip-design.component.css',
  providers: [TooltipDirective]
})
export class ToolTipDesignComponent {
  title = 'angular-tooltips-tutorial';
  position: any = TooltipPosition.DEFAULT;
  TooltipPosition: any = TooltipPosition;
  x = 0;
  y = 0;
  coordinates = "";

  @HostListener('mousemove', ['$event'])
  onMouseMove($event: MouseEvent): void {
    this.x = $event.clientX;
    this.y = $event.clientY;
    this.coordinates = `${this.x},${this.y}`;
  }
}
