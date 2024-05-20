import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
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
import { take } from 'rxjs';
import {
  AuthEventService,
  AuthService,
  MessengerService,
  ROUTES_CNT,
} from '../../src';

@Component({
  selector: 'app-page-login',
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
  templateUrl: './page-login.component.html',
  styleUrl: './page-login.component.scss',
})
export class PageLoginComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private _authService: AuthService,
    private _router: Router,
    private _authEventService: AuthEventService,
    private _messengerService: MessengerService
  ) {}

  login() {
    this._authService.login({
      email: this.loginForm.value.email!,
      password: this.loginForm.value.password!,
    });

    this._authEventService
      .getEventIsAuthenticated()
      .pipe(take(1))
      .subscribe((data) => {
        if (data.isAuthenticated) this._router.navigate([ROUTES_CNT.HOMEPAGE]);
        else
          this._messengerService.showError(
            'usuário ou senha invalidos. Tente novamente.'
          );
      });
  }
}
