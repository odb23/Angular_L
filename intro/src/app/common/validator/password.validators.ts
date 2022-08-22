import {
  AbstractControl,
  ControlContainer,
  ValidationErrors,
} from '@angular/forms';

export class PasswordValidator {
  static isNotOldPassword(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // simulate backend call
        if (control.value !== '1234') resolve({ isNotOldPassword: true });
        else resolve(null);
      }, 2000);
    });
  }

  static passwordMatch(control: AbstractControl): ValidationErrors | null {
    const newPassword = control.get('newPassword')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    if (newPassword !== confirmPassword) return { passwordMismatch: true };

    return null;
  }
}
