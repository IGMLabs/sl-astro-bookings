import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { CommonService } from 'src/app/core/commons/common.service';
import { FormMessagesService } from 'src/app/core/forms/form-messages.service';
import { FormValidationsService } from 'src/app/core/forms/form-validations.service';
import { FormBase } from 'src/app/core/forms/form.base';
import { Register } from '../api/register.interface';


@Component({
  selector: 'app-register-form',
  templateUrl: './register.form.html',
  styleUrls: ['./register.form.css']
})
export class RegisterForm extends FormBase implements OnInit {
  @Output() register = new EventEmitter<Register>();

  constructor(formBuilder: FormBuilder, fms: FormMessagesService, fvs: FormValidationsService) {
    super(fms);
    this.form = formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl(''),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10),
      ]),
      acceptTerms: new FormControl(false),
    },
    {
      validators: [fvs.passwordMatch]
    }

    );
  }

  ngOnInit(): void {

  }

  public onSave() {
    const {name, email, password} = this.form.value;
    const register: Register = { name, email: email.email, password };
    console.warn('Send register', register);
    this.register.emit(register);
  }

  public getPasswordMessage() {
    const errors = this.form.errors;
    if (!errors) return  '';
    if (errors['passwordMatch']) return errors['passWordMatch'];
    return '';
  }

}
