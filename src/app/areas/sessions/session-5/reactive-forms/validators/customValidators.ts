import { FormControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {
  static noSpaceAllow(control: FormControl): ValidationErrors | null {
    if (control.value != null && control.value.indexOf(' ') != -1) {
      return {
        noSpaceAllow: true,
      };
    }
    return null;
  }
}
