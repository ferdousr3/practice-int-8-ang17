import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CustomValidators } from '../reactive-forms/validators/customValidators';

@Component({
  selector: 'app-single-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './single-form.component.html',
  styleUrl: './single-form.component.css',
})
export class SingleFormComponent {
  constructor(private _fromBuilder: FormBuilder) {}

  singleForm = this._fromBuilder.group({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      CustomValidators.noSpaceAllow,
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.maxLength(6),
      Validators.minLength(5),
    ]),
  });

  get firstName() {
    return this.singleForm.get('firstName');
  }
  get lastName() {
    return this.singleForm.get('lastName');
  }

  onSubmit() {
    console.log(this.singleForm);
  }
}
