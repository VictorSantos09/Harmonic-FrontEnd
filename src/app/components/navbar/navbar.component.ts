import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { AuthService } from '../../../services';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule],
  providers: [AuthService, Router],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Input() items: MenuItem[] | undefined;

  constructor() {}

  myStyle(): object {
    if (typeof window !== 'undefined') {
      const primaryColor = window
        .getComputedStyle(document.documentElement)
        .getPropertyValue('--purple-800');

      return { 'background-color': primaryColor };
    }
    return {};
  }
}
