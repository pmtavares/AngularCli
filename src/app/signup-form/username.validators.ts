import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators {
  static cannotContainsSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return { cannotContainsSpace: true }
    }
    return null;
  };

  static shouldbeUnique(control: AbstractControl): ValidationErrors | null
  {
    setTimeout(() => { console.log('ok') }, 200);

    if (control.value === 'pedro') {
      return { shouldBeUnique: true}
    }
    return null;
  }
}
