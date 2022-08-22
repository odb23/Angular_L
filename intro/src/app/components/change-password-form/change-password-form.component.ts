import { PasswordValidator } from '../../common/validator/password.validators';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css'],
})
export class ChangePasswordFormComponent {
  form: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.form = _fb.group(
      {
        oldPassword: [
          '',
          Validators.required,
          PasswordValidator.isNotOldPassword,
        ],
        newPassword: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      { validators: PasswordValidator.passwordMatch }
    );
  }

  handleClick() {
    console.log('i was clicked')
  }

  printErrors () {
    console.log(this.form.errors)
  }

  get oldPassword() {
    return this.form.get('oldPassword') as FormControl;
  }

  get newPassword() {
    return this.form?.get('newPassword') as FormControl;
  }

  get confirmPassword() {
    return this.form.get('confirmPassword') as FormControl;
  }
}
