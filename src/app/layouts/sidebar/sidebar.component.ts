
// sidebar.component.ts
import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { MENU_ITEMS, MenuGroup, MenuItem } from './menu';
import { filter } from 'rxjs';

@Component({
    selector: 'app-sidebar',
    imports: [RouterLink, CommonModule],
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
 menuItems: MenuGroup[] = MENU_ITEMS;
 activeItem: MenuItem | null = null;
 currentPath: string = '';

  toggle(item: MenuItem | string): void {
    if (typeof item === 'string') {
      console.log('Toggling link:', item);
      this.activeItem = null;
      return;
    }

    if (this.activeItem === item) {
      this.activeItem = null;
    } else {
      this.activeItem = item;
    }
  }

  isActive(item: MenuItem): boolean {
    // Check if this.activeItem matches the current item
    if (this.activeItem === item) {
      return true;
    }

    // Check if the current item has a submenu
    if (item.submenu) {
      // Check if any submenu item matches the current path
      return item.submenu.some(subItem => this.currentPath === subItem.link);
    }
    return this.currentPath === item.link;
  }



  constructor(private router: Router
  ) {
    // Subscribe to router events to track route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.getCurrentPath();
    });
  }

  ngOnInit(): void {
    this.getCurrentPath(); // Initial call to get current path
  }

  getCurrentPath(): void {
    this.currentPath = this.router.url;
    console.log('Current path:', this.currentPath);
  }
}
