import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slices',
  standalone: true,
})
export class Slices implements PipeTransform {
  transform(value: string, maxLength: number): string {
    if (maxLength >= value.length) {
      return value;
    } else {
      return value.slice(0, maxLength) + '...';
    }
  }
}
