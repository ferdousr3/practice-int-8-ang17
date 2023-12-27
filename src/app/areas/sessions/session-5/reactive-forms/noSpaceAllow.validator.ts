import { FormControl, ValidationErrors } from '@angular/forms';

export const noSpaceAllow = (control: FormControl): ValidationErrors | null => {
  if (control.value != null && control.value.indexOf(' ') != -1) {
    return {
      noSpaceAllow: true,
    };
  }
  return null;
};
