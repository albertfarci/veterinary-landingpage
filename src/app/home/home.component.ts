import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None  
})
export class HomeComponent {
  services = [
    {
      title: 'Medicina generale e preventiva',
      description: 'Per il benessere dei tuoi animali.',
      imageUrl: 'assets/images/service1.jpg',
      router: '/medicina-generale'
    },
    {
      title: 'Medicina interna',
      description: 'Servizio per la cura dei casi di tutti i giorni.',
      imageUrl: 'assets/images/service2.jpg',
      router: '/medicina-interna'
    },
    {
      title: 'Laboratorio di analisi',
      description: 'Diagnosi più accurate e veloci.',
      imageUrl: 'assets/images/service3.jpg',
      router: '/analisi'
    },
    {
      title: 'Nutrizione',
      description: 'Piani di nutrizione.',
      imageUrl: 'assets/images/service4.jpg',
      router: '/nutrizione'
    },
    {
      title: 'Chirurgia',
      description: 'Interventi di routine.',
      imageUrl: 'assets/images/service4.jpg',
      router: '/chirurgia'
    }
  ];
  
  isServiceCardsVisible: boolean = false;

  ngOnInit(): void {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }
  
  handleScroll(): void {
    const serviceCards = document.getElementById('serviceCards');
    if (serviceCards && !this.isScrolledIntoView(serviceCards)) {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const elementPosition = serviceCards.getBoundingClientRect().top;
      const isVisible = elementPosition - windowHeight < 0;
      if (isVisible) {
        serviceCards.style.visibility = 'visible';
        serviceCards.style.animation = 'fadeIn 2.5s ease-in-out';
        window.removeEventListener('scroll', this.handleScroll.bind(this));
      }
    }
  }

  isScrolledIntoView(el: any): boolean {
    const rect = el.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;

    // Only completely visible elements return true:
    const isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    // isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
  }
}
