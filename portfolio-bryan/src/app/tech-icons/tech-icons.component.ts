import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-icons',
  standalone: false,

  templateUrl: './tech-icons.component.html',
  styleUrls: ['./tech-icons.component.css']
})
export class TechIconsComponent {
  progress = 0;
  backend = [
    {
      name: 'Symfony',
      icon: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/symfony/symfony-original.svg',
      flipped: false,
      percentaje: 60
    },
    {
      name: 'MySQL',
      icon: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/mysql/mysql-original.svg',
      flipped: false,
      percentaje: 90

    },
    {
      name: 'HeidiSQL',
      icon: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/mysql/mysql-original.svg',
      flipped: false,
      percentaje: 90

    },
    {
      name: 'Laravel',
      icon: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/laravel/laravel-plain.svg',
      flipped: false,
      percentaje: 85
    },
    {
      name: 'Java',
      icon: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/java/java-original.svg',
      flipped: false,
      percentaje: 60
    }
  ];


  frontend = [
    {
      name: 'Angular',
      icon: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/angularjs/angularjs-original.svg',
      flipped: false,
      percentaje: 55
    },
    {
      name: 'Tailwind',
      icon: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/tailwindcss/tailwindcss-plain.svg',
      flipped: false,
      percentaje: 85
    },
    {
      name: 'HTML',
      icon: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/html5/html5-original.svg',
      flipped: false,
      percentaje: 100
    },
    {
      name: 'CSS',
      icon: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/css3/css3-original.svg',
      flipped: false,
      percentaje: 90
    },
    {
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/javascript/javascript-original.svg',
      flipped: false,
      percentaje: 65
    }, {
      name: 'TypeScript',
      icon: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/typescript/typescript-original.svg',
      flipped: false,
      percentaje: 55
    },
    {
      name: 'Bootstrap',
      icon: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/bootstrap/bootstrap-plain.svg',
      flipped: false,
      percentaje: 70
    }
  ];

  toggleCard(tech: any) {
    tech.flipped = !tech.flipped;





  }

}