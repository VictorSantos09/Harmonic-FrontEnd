import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ROUTES_CNT } from '../../../consts';
import { AuthEventService, AuthService } from '../../../services';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule],
  providers: [AuthService, Router],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private eventService: AuthEventService
  ) {}

  myStyle(): object {
    if (typeof window !== 'undefined') {
      const primaryColor = window
        .getComputedStyle(document.documentElement)
        .getPropertyValue('--purple-800');

      return { 'background-color': primaryColor };
    }
    return {};
  }

  ngOnInit() {
    this.eventService.getEventIsAuthenticated().subscribe((data) => {
      this._setItems(data);
    });

    this._setItems(this._authService.isAuthenticated);
  }

  private _setItems(isAuthenticated: boolean) {
    this.items = [];

    this.items = [
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
