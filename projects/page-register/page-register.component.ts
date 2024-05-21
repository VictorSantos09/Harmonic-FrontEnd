import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import {
  AuthEventService,
  AuthService,
  MessengerService,
  ROUTES_CNT,
} from '../../src';

@Component({
  selector: 'app-page-register',
  templateUrl: './page-register.component.html',
  styleUrls: ['./page-register.component.scss'],
  standalone: true,
  imports: [
    InputGroupModule,
    InputGroupAddonModule,
    PasswordModule,
    CommonModule,
    FormsModule,
    FloatLabelModule,
    DividerModule,
    ButtonModule,
    ReactiveFormsModule,
    InputGroupAddonModule,
    InputTextModule,
    CardModule,
    ToastModule,
  ],
  providers: [AuthService, Router, MessengerService, MessageService],
})
export class PageRegisterComponent {
  registerForm = this.fb.group(
    {
      user: '',
      email: ['', [Validators.required, Validators.email]],
      confirmEmail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
    },
    { validator: this.checkPasswords }
  );

  constructor(
    private fb: FormBuilder,
    private _authService: AuthService,
    private _router: Router,
    private _authEventService: AuthEventService,
    private _messengerService: MessengerService
  ) {}

  checkPasswords(group: FormGroup) {
    let pass = group.controls['password'].value;
    let confirmPass = group.controls['confirmPassword'].value;
    let email = group.controls['email'].value;
    let confirmEmail = group.controls['confirmEmail'].value;

    return pass === confirmPass && email === confirmEmail
      ? null
      : { notSame: true };
  }

  onSubmit() {
    this._authService
      .register({
        email: this.registerForm.value.email!,
        password: this.registerForm.value.password!,
      })
      .subscribe({
        next: () => {
          this._messengerService.showSuccess('Conta criada com sucesso');
          setTimeout(() => {
            this._router.navigate([ROUTES_CNT.LOGIN]);
          }, 1500);
        },
        error: (err) => {
          this._messengerService.showError(
            'Um erro ocorreu ao criar sua conta',
            err
          );
        },
      });
  }
}
