import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IFeature, features } from './featuer.data';

@Component({
  selector: 'feature',
  standalone: true,
  imports: [],
  templateUrl: './feature.component.html',
})
export class FeatureComponent {

  features: IFeature[] = features
  constructor(private sanitizer: DomSanitizer) {

  }
}
