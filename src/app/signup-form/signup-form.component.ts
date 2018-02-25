import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';
@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  myForm = new FormGroup({
    'username': new FormControl('', [Validators.required, Validators.minLength(3),
      UsernameValidators.cannotContainsSpace], UsernameValidators.shouldBeUnique),
    'password': new FormControl('', Validators.required)
  });

  get username() {
    return this.myForm.get('username');
  }

}
