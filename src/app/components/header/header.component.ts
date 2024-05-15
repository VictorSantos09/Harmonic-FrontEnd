import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ROUTES_CNT } from '../../../consts';
import { AuthEventService, AuthService } from '../../../services';
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
  isAuthenticated!: boolean;
  itemsAuth: MenuItem[] | undefined;
  itemsNotAuth: MenuItem[] | undefined;

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private eventService: AuthEventService
  ) {}

  ngOnInit(): void {
    this.isAuthenticated = this._authService.isAuthenticated;

    this.itemsAuth = this._setItems(true);
    this.itemsNotAuth = this._setItems(false);

    this.eventService.getEventIsAuthenticated().subscribe((data) => {
      this.isAuthenticated = data;
    });

    this._authService.onAuthChanged.subscribe((data) => {
      this.isAuthenticated = data;
    });
  }

  private _setItems(isAuthenticated: boolean) {
    return [
      {
        label: 'Inicio',
        icon: 'pi pi-fw pi-home',
        command: () => {
          this._router.navigate([ROUTES_CNT.HOMEPAGE]);
        },
      },
      {
        visible: isAuthenticated,
        label: 'Gerenciar',
        icon: 'pi pi-fw pi-th-large',
        items: [
          {
            label: 'Conteúdo',
            icon: 'pi pi-fw pi-pen-to-square',
            items: [
              {
                label: 'Rádio',
                icon: 'pi pi-fw pi-volume-off',
                command: () => {
                  this._router.navigate([ROUTES_CNT.RADIO]);
                },
              },
              {
                label: 'Podcast',
                icon: 'pi pi-fw pi-volume-off',
                routerLink: [ROUTES_CNT.PODCAST],
              },
            ],
          },
          {
            label: 'Tipos Conteúdos',
            icon: 'pi pi-fw pi-pen-to-square',
          },
          {
            label: 'Plataformas',
            icon: 'pi pi-fw pi-pen-to-square',
          },
          {
            label: 'Países',
            icon: 'pi pi-fw pi-pen-to-square',
          },
        ],
      },
      {
        visible: true,
        label: 'Conta',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            visible: !isAuthenticated,
            label: 'Entrar',
            icon: 'pi pi-fw pi-sign-in',
            routerLink: [ROUTES_CNT.LOGIN],
          },
          {
            visible: !isAuthenticated,
            label: 'Criar Conta',
            icon: 'pi pi-fw pi-user-plus',
            routerLink: [ROUTES_CNT.CADASTRO],
          },
          {
            visible: isAuthenticated,
            label: 'Sair',
            icon: 'pi pi-fw pi-power-off',
            command: () => {
              this._authService.logout();
            },
          },
          {
            visible: isAuthenticated,
            label: 'Meu Perfil',
            icon: 'pi pi-fw pi-user-edit',
            routerLink: [ROUTES_CNT.MEU_PERFIL],
          },
          {
            visible: isAuthenticated,
            label: 'Meus Momentos',
            icon: 'pi pi-fw pi-users',
            items: [
              {
                icon: 'pi pi-fw pi-bars',
                label: 'Consulta',
              },
            ],
          },
        ],
      },
    ];
  }
}
