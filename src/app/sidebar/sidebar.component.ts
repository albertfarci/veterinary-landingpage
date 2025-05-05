import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() isSidebarOpen: boolean = false;
  @Output() closeSidebar = new EventEmitter<void>();

  servicesMenuOpen = false;
  
  services = [
    {
      title: 'Medicina generale e preventiva',
      router: '/medicina-generale'
    },
    {
      title: 'Medicina interna',
      router: '/medicina-interna'
    },
    {
      title: 'Nutrizione',
      router: '/nutrizione'
    }
  ];

  constructor(private router: Router) {}
  
  onCloseSidebar() {
    this.closeSidebar.emit();
  }
  
  isActive(url: string): boolean {
    return this.router.url === url;
  }

  toggleServicesMenu() {
    this.servicesMenuOpen = !this.servicesMenuOpen;
  }

  onSubServiceCloseSidebar() {
    this.toggleServicesMenu();
    this.closeSidebar.emit();
  }
}