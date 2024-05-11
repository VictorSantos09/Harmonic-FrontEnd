import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ROUTES_CNT } from '../../../consts';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] | undefined;

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
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-fw pi-home',
        routerLink: [ROUTES_CNT.HOMEPAGE],
      },
      {
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
                routerLink: [ROUTES_CNT.RADIO],
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
        label: 'Conta',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Consulta',
            icon: 'pi pi-fw pi-user-plus',
          },
          {
            label: 'Cancelar',
            icon: 'pi pi-fw pi-user-minus',
          },
          {
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
      {
        label: 'Sair',
        icon: 'pi pi-fw pi-power-off',
      },
    ];
  }
}
