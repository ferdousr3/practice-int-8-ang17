import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'optimize-img',
  standalone: true,
  imports: [NgOptimizedImage],
  template:`<img class={{class}} ngSrc="{{src}}" width={{width}} height={{height}} alt="alt" loading="lazy" ngSrcset="100w, 200w, 300w" />`
})
export class OptimizeImg {
  @Input() src?: string ;
  @Input() width?: number | string ;
  @Input() height?: number | string ; 
  @Input() alt?: string;
  @Input() class?: string;
}
