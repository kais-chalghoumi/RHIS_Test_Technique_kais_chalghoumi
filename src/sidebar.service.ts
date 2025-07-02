import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private isSidebarToggled = false;

  constructor() {}

  toggleSidebar() {
    this.isSidebarToggled = !this.isSidebarToggled;
    this.updateBodyClass();
    this.handleOutsideClick();
  }

  private updateBodyClass() {
    const body = document.body;
    if (this.isSidebarToggled) {
      body.classList.add('toggle-sidebar');
    } else {
      body.classList.remove('toggle-sidebar');
    }
  }

  private handleOutsideClick() {
    const body = document.body;
    const sidebar = document.querySelector('.sidebar');

    const handleClick = (event: MouseEvent) => {
      if (sidebar && !sidebar.contains(event.target as Node)) {
        this.isSidebarToggled = false;
        this.updateBodyClass();
        document.removeEventListener('click', handleClick);
      }
    };

    setTimeout(() => {
      document.addEventListener('click', handleClick);
    });
  }

  getSidebarStyle() {
    return this.isSidebarToggled ? 'margin-left: 72px;' : '';
  }
}
