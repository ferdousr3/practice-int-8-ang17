import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { noSpaceAllow } from './noSpaceAllow.validator';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css',
})
export class ReactiveFormsComponent implements OnInit {
  constructor(private _fromBuilder: FormBuilder) {}

  registrationForm = this._fromBuilder.group({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(6),
      noSpaceAllow,
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      noSpaceAllow,
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    dob: new FormControl('', [Validators.required, Validators.minLength(5)]),
    gender: new FormControl('male', [Validators.required]),
    address: new FormGroup({
      country: new FormControl('bangladesh', [Validators.required]),
      city: new FormControl('', [Validators.required]),
    }),
    skills: new FormArray([
      new FormControl('', Validators.required),
      new FormControl('', Validators.required),
      new FormControl('', Validators.required),
    ]),
    terms: new FormControl('', [Validators.required, Validators.requiredTrue]),
  });

  ngOnInit(): void {
    this.registrationForm.get('firstName')?.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  get firstName() {
    return this.registrationForm.get('firstName');
  }
  get lastName() {
    return this.registrationForm.get('lastName');
  }
  get email() {
    return this.registrationForm.get('email');
  }
  get userName() {
    return this.registrationForm.get('userName');
  }
  get dob() {
    return this.registrationForm.get('dob');
  }
  get gender() {
    return this.registrationForm.get('gender');
  }
  get country() {
    return this.registrationForm.get('address.country');
  }
  get city() {
    return this.registrationForm.get('address.city');
  }
  get skills() {
    return (this.registrationForm.get('skills') as FormArray).controls;
  }
  get terms() {
    return this.registrationForm.get('terms');
  }

  isValid() {
    return !this.registrationForm.valid;
  }

  onSubmit() {
    console.log(this.registrationForm);
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
    }
  }

  addSkills() {
    (<FormArray>this.registrationForm.get('skills')).push(
      new FormControl('', Validators.required)
    );
  }
  removeSkill(idx: number) {
    const control = <FormArray>this.registrationForm.get('skills');
    if (control.length > 1) {
      control.removeAt(idx);
    }
  }

  
}
