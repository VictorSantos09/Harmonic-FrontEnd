import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ROUTES_CNT } from '../../../consts';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MenubarModule],
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
        routerLink: [ROUTES_CNT.HOMEPAGE]
      },
      {
        label: 'Conteúdo',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Gerenciar',
            icon: 'pi pi-fw pi-plus',
            items: [
              {
                label: 'Radio',
                icon: 'pi pi-fw pi-bookmark',
                routerLink: [ROUTES_CNT.RADIO]
              },
              {
                label: 'Podcast',
                icon: 'pi pi-fw pi-video',
                routerLink: [ROUTES_CNT.PODCAST]
              },
            ],
          }
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
