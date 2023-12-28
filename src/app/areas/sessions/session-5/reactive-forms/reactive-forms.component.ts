import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CustomValidators } from './validators/customValidators';
import { EmailService } from './validators/services/email.service';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css',
})
export class ReactiveFormsComponent implements OnInit {
  constructor(
    private _fromBuilder: FormBuilder,
    private _emailService: EmailService
  ) {}

  useNamePattern = '^[a-zA-Z ]*$';
  registrationForm = this._fromBuilder.group({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(6),
      Validators.pattern(this.useNamePattern),
      CustomValidators.noSpaceAllow,
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.pattern(this.useNamePattern),
      CustomValidators.noSpaceAllow,
    ]),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
      asyncValidators: [this._emailService.uniqueEmailValidation()],
      updateOn: 'blur',
    }),
    userName: new FormControl('', [Validators.required]),
    dob: new FormControl('', [Validators.required, Validators.minLength(5)]),
    gender: new FormControl('male', [Validators.required]),
    address: new FormGroup({
      country: new FormControl('bangladesh', [Validators.required]),
      city: new FormControl('', [Validators.required]),
    }),
    skills: new FormArray([
      new FormControl('', Validators.required),
      // new FormControl('', Validators.required),
      // new FormControl('', Validators.required),
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

  disableGnName() {
    return !(
      this.registrationForm.get('firstName')?.value &&
      this.registrationForm.get('lastName')?.value &&
      this.registrationForm.get('dob')?.value
    );
  }
  gnUsername() {
    const firstName: string | undefined =
      this.registrationForm.get('firstName')?.value || '';
    const lastName: string | undefined =
      this.registrationForm.get('lastName')?.value || '';
    const dob: string | undefined =
      this.registrationForm.get('dob')?.value || '';

    let username = '';

    if (firstName && firstName.length >= 3) {
      username += firstName.slice(0, 3);
    } else if (firstName) {
      username += firstName;
    }

    if (lastName && lastName.length >= 3) {
      username += lastName.slice(0, 3);
    } else if (lastName) {
      username += lastName;
    }

    const birthYear = dob ? new Date(dob).getFullYear() : '';
    username += birthYear;

    username = username.toLowerCase();

    console.log(username);

    this.registrationForm?.get('userName')?.setValue(username);
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
