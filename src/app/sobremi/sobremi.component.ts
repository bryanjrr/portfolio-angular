import { Component, AfterViewInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css'],
  standalone: false
})
export class SobremiComponent implements AfterViewInit {
  @ViewChild('section', { static: true }) sectionEl!: ElementRef;

  contactInfo = [
    { icon: 'fa-solid fa-envelope', text: 'bryanjoyarubio@gmail.com', link: 'mailto:bryanjoyarubio@gmail.com' },
    { icon: 'fa-solid fa-phone', text: '+34 634 40 89 01', link: 'tel:+34634408901' },
    { icon: 'fa-brands fa-linkedin', text: 'linkedin.com/in/bryanjrr', link: 'https://www.linkedin.com/in/bryanjrr/' }
  ];

  accordionSections = [
    {
      title: "Información Personal",
      icon: "fa-address-card",
      description: `¡Hola! Soy Bryan Joya, un desarrollador web Junior de 20 años ubicado en Badalona. Busco activamente mi primera oportunidad laboral para aplicar mis habilidades en el desarrollo de aplicaciones web full-stack. Con experiencia en frameworks como Angular, React, Laravel y Symfony, mi objetivo es aportar valor a proyectos innovadores mientras continúo mi crecimiento profesional.`,
      isExpanded: true
    },
    {
      title: "Tecnologías",
      icon: "fa-code",
      skills: [
        { name: "Angular", level: 4 },
        { name: "React (JSX)", level: 3 },
        { name: "Laravel", level: 4 },
        { name: "Symfony", level: 3 },
        { name: "PHP", level: 4 },
      ],
      isExpanded: false
    },
    {
      title: "Soft Skills",
      icon: "fa-users",
      skills: [
        { name: "Comunicación", level: 4 },
        { name: "Trabajo en Equipo", level: 5 },
        { name: "Actitud Positiva", level: 4 },
        { name: "Implicación", level: 5 },
      ],
      isExpanded: false
    },
    {
      title: "Hobbies e Intereses",
      icon: "fa-heart",
      hobbies: [
        { name: "Videojuegos", icon: "fa-gamepad" },
        { name: "Cine", icon: "fa-film" },
        { name: "Desarrollo Personal", icon: "fa-book-open-reader" },
        { name: "Deporte", icon: "fa-dumbbell" },
      ],
      isExpanded: false
    }
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.initMap();
    this.initScrollAnimation();
  }

  initMap(): void {
    const blueIcon = new L.Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    const map = L.map('mapa', {
      center: [41.4469, 2.2450],
      zoom: 13,
      attributionControl: false,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);
    L.marker([41.4469, 2.2450], { icon: blueIcon }).addTo(map);
  }

  initScrollAnimation(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.sectionEl.nativeElement.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2
    });

    observer.observe(this.sectionEl.nativeElement);
  }

  toggleAccordion(index: number): void {
    this.accordionSections.forEach((section, i) => {
      section.isExpanded = i === index ? !section.isExpanded : false;
    });
    this.cdr.detectChanges();
  }
}