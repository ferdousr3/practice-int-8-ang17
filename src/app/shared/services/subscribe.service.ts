import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SubscribeService {
  constructor() {}

  subscribe(value: string) {
    alert(`successfully subscribe for ${value}`);
  }
}
