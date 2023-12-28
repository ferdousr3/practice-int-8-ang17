import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Observable, delay, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor() {}

  existsEmail(email: string): Observable<boolean> {
    return of(email).pipe(
      delay(500),
      map((email) => {
        const emails = ['jhon@gmail.com', 'smith@egmail.com', 'exm@gmail.com'];
        return emails.includes(email);
      })
    );
  }

  uniqueEmailValidation(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.existsEmail(control.value).pipe(
        map((exists) => (exists ? { existsEmail: true } : null))
      );
    };
  }
}
