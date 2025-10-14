import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // Estado para la animación del scroll (para aplicar la clase 'scrolled')
  isScrolled: boolean = false;
  
  // Estado para el menú móvil (para aplicar la clase 'open')
  isOpen: boolean = false; 

  ngOnInit(): void {
    // Inicializa el estado al cargar la página
    this.checkScrollPosition();
  }

  // Listener que detecta el evento de scroll en la ventana
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScrollPosition();
  }

  // Lógica para determinar el estado del scroll
  checkScrollPosition() {
    // El header cambia de estado cuando el scroll supera los 70 píxeles
    this.isScrolled = window.scrollY > 70;
  }

  // Lógica para abrir/cerrar el menú móvil
  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
  
  // Función para manejar el scroll a diferentes secciones de la página
  scrollTo(sectionId: string): void {
    if (this.isOpen) {
      this.isOpen = false;
    }
    
    // Scroll programático suave a la sección
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}