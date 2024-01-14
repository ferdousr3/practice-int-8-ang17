import { Component, HostListener } from '@angular/core';
import { TooltipPosition, TooltipTheme } from './tooltip.enums';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.css'
})
export class TooltipComponent {
  position: TooltipPosition = TooltipPosition.DEFAULT;
  theme: TooltipTheme = TooltipTheme.DEFAULT;
  tooltip = '';
  left = 0;
  top = 0;
  visible = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
