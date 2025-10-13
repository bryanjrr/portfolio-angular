import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-header',
  standalone: true, // Set to true
  imports: [CommonModule], // Import CommonModule
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  scrollTo(sectionId: string): void {
    if (this.isOpen) {
      this.isOpen = false;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}