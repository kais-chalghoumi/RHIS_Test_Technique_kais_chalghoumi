import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification/notification.component';
import { SettingsComponent } from './settings/settings.component';
import { SidebarService } from '../../../sidebar.service';
import { RouterLink, RouterOutlet } from '@angular/router';
export interface Notification {
  id: number;
  avatar: string;
  message: string;
  time: string;
  show: boolean; // Assuming show is a boolean property
}

@Component({
    selector: 'app-topbar',
    imports: [CommonModule, NotificationComponent, SettingsComponent, RouterLink],
    templateUrl: './topbar.component.html',
    styleUrl: './topbar.component.scss'
})
export class TopbarComponent {
  mode: 'light' | 'dark' = 'light'; // Initial mode is light

  toggleMode() {
    this.mode = this.mode === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-mode', this.mode);
  }
  isFullScreen: boolean = false;

  @HostListener('document:fullscreenchange', ['$event'])
  onFullScreenChange(event: Event) {
    this.isFullScreen = !!document.fullscreenElement;
  }

  toggleFullScreen() {
    if (this.isFullScreen) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  }

  dropdown: boolean = false;
  open: boolean = false;

  notifications: Notification[] = [
    {
      id: 1,
      avatar: 'assets/images/avatar-1.png',
      message: 'Edited the details of Project',
      time: '1s ago',
      show: true,
    },
    {
      id: 2,
      avatar: 'assets/images/avatar-4.png',
      message: 'Released a new version',
      time: '2m ago',
      show: true,
    },
    {
      id: 3,
      avatar: 'assets/images/avatar-13.png',
      message: 'Submitted a bug',
      time: '10m ago',
      show: true,
    },
    {
      id: 4,
      avatar: 'assets/images/avatar-19.png',
      message: 'Modified A data in Page',
      time: '15m ago',
      show: true,
    },
    {
      id: 5,
      avatar: 'assets/images/avatar-24.png',
      message: 'Modified A data in Page',
      time: '30m ago',
      show: true,
    },
    {
      id: 6,
      avatar: 'assets/images/avatar-1.png',
      message: 'Edited the details of Project',
      time: '45m ago',
      show: true,
    },
    {
      id: 7,
      avatar: 'assets/images/avatar-4.png',
      message: 'Released a new version',
      time: '1h ago',
      show: true,
    },
    {
      id: 8,
      avatar: 'assets/images/avatar-13.png',
      message: 'Submitted a bug',
      time: '2h ago',
      show: true,
    },
  ];

  constructor(
    private cdr: ChangeDetectorRef,
    private sidebarService: SidebarService
  ) {}

  toggleDropdown() {
    this.dropdown = !this.dropdown;
    this.open = !this.open;
    this.cdr.detectChanges();
  }

  toggle() {
    this.open = !this.open;
  }

  dismissNotification(notification: Notification) {
    notification.show = false;
  }

  getVisibleNotificationsCount(): number {
    return this.notifications.filter((notification) => notification.show)
      .length;
  }

  @HostListener('document:click', ['$event'])
  clickOutsideDropdown(event: MouseEvent) {
    if (!this.dropdown) {
      return;
    }

    const target = event.target as HTMLElement;
    if (!target.closest('.profile')) {
      this.dropdown = false;
    }
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }
}
