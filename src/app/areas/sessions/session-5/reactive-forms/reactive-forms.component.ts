import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css',
})
export class ReactiveFormsComponent {
  constructor(private _fromBuilder: FormBuilder) {}

  registrationForm = this._fromBuilder.group({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(6),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    dob: new FormControl('', [Validators.required, Validators.minLength(5)]),
    gender: new FormControl('male', [Validators.required]),
    country: new FormControl('bangladesh', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    terms: new FormControl('', [Validators.required]),
  });

  get firstName() {
    return this.registrationForm.get('firstName');
  }
  get email() {
    return this.registrationForm.get('email');
  }
  get lastName() {
    return this.registrationForm.get('lastName');
  }
  get terms() {
    return this.registrationForm.get('terms');
  }

  onSubmit() {
    console.log(this.registrationForm);
  }
}
