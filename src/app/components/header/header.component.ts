import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { lastValueFrom } from 'rxjs';
import { ROUTES_CNT } from '../../../consts';
import {
  AdminService,
  AuthEventService,
  AuthService,
  AuthState,
} from '../../../services';
import { NavbarComponent } from '../navbar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  providers: [AuthService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  authState!: AuthState;
  itemsAuth: MenuItem[] | undefined;
  itemsNotAuth: MenuItem[] | undefined;
  itemsAuthAdmin: MenuItem[] | undefined;

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private eventService: AuthEventService,
    private _adminService: AdminService
  ) {}

  ngOnInit(): void {
    lastValueFrom(this._authService.isAuthenticated).then((value) => {
      console.log("This is value: " + value)
      lastValueFrom(this._adminService.isAdmin())
        .then((isAdmin) => {
          console.log("This is isAdmin: " + isAdmin)
          this.authState = {
            isAdmin: isAdmin,
            isAuthenticated: value,
            isEmail: "",
          };

          this._setItemsWithState(this.authState);
        })
        .catch(() => {
          this._setItemsDefaultOptions();
        });
    });

    this.eventService.getEventIsAuthenticated().subscribe((authState) => {
      console.log("This is isAdmin: " + authState.isAdmin + "\nThis is isAuthenticated:" + authState.isAuthenticated)
      this.authState = authState;

      this._setItemsWithState(authState);
  });
}

private _setItems(authState: AuthState) {
    return [
      {
        label: 'Inicio',
        icon: 'pi pi-fw pi-home',
        command: () => {
          this._router.navigate([ROUTES_CNT.HOMEPAGE]);
        },
      },
      {
        visible: authState.isAdmin,
        label: 'Gerenciar',
        icon: 'pi pi-fw pi-th-large',
        items: [
          {
            label: 'Conteúdo',
            icon: 'pi pi-fw pi-pen-to-square',
            command: () => {
              this._router.navigate([ROUTES_CNT.CONTEUDO]);
            },
          },
        ],
      },
      {
        visible: true,
        label: 'Conta',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            visible: !authState.isAuthenticated,
            label: 'Entrar',
            icon: 'pi pi-fw pi-sign-in',
            routerLink: [ROUTES_CNT.LOGIN],
          },
          {
            visible: !authState.isAuthenticated,
            label: 'Criar Conta',
            icon: 'pi pi-fw pi-user-plus',
            routerLink: [ROUTES_CNT.CADASTRO],
          },
          {
            visible: authState.isAuthenticated,
            label: 'Sair',
            icon: 'pi pi-fw pi-power-off',
            command: () => {
              this._authService.logout();
            },
          },
          {
            visible: authState.isAuthenticated,
            label: 'Meus Momentos',
            icon: 'pi pi-fw pi-users',
            routerLink: [ROUTES_CNT.MOMENTS]
          },
        ],
      },
      {
        visible: authState.isAuthenticated,
        label: `Olá, ${authState.isEmail}`,
        icon: 'pi pi-fw pi-user',
      }
    ];
  }

  private _setItemsDefaultOptions() {
    this.itemsAuth = this._setItems({
      isAdmin: false,
      isAuthenticated: true,
      isEmail: this.authState.isEmail,
    });

    this.itemsNotAuth = this._setItems({
      isAdmin: false,
      isAuthenticated: false,
      isEmail: this.authState.isEmail,
    });

    this.itemsAuthAdmin = this._setItems({
      isAdmin: true,
      isAuthenticated: true,
      isEmail: this.authState.isEmail,
    });
  }

  private _setItemsWithState(authState: AuthState) {
    this.itemsAuth = this._setItems(authState);
    this.itemsNotAuth = this._setItems(authState);
    this.itemsAuthAdmin = this._setItems(authState);
  }
}