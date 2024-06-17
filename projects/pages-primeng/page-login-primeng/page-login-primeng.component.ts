import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import {
  AuthEventService,
  AuthService,
  MessengerService,
  ROUTES_CNT,
} from '../../../src';

@Component({
  selector: 'app-page-login-primeng',
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
    ToastModule,
  ],
  providers: [AuthService, MessengerService, MessageService],
  templateUrl: './page-login-primeng.component.html',
  styleUrl: './page-login-primeng.component.scss',
})
export class PageLoginPrimengComponent {
  valuePassword: string | undefined;
  valueUsername: string | undefined;

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _authEventService: AuthEventService,
    private _messengerService: MessengerService
  ) {}

  onSubmitButtonClick() {
    this._authService.login({
      email: this.valueUsername!,
      password: this.valuePassword!,
    });

    this._authEventService.getEventIsAuthenticated().subscribe((data) => {
      if (data) this._router.navigate([ROUTES_CNT.HOMEPAGE]);
      else
        this._messengerService.showInfo(
          'usuário ou senha invalidos. Tente novamente.'
        );
    });
  }
}
