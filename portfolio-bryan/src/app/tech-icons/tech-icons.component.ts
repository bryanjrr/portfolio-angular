import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-icons',
  standalone: false,

  templateUrl: './tech-icons.component.html',
  styleUrls: ['./tech-icons.component.css']
})
export class TechIconsComponent {
  backend = [
    {
      name: 'Symfony',
      icon: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/symfony/symfony-original.svg'
    },
    {
      name: 'MySQL',
      icon: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/mysql/mysql-original.svg'
    },
    {
      name: 'HeidiSQL',
      icon: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/mysql/mysql-original.svg'
    },
    {
      name: 'Laravel',
      icon: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/laravel/laravel-plain.svg'
    },
    {
      name: 'Java',
      icon: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/java/java-original.svg'
    }
  ];

  frontend = [
    {
      name: 'Angular',
      icon: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/angularjs/angularjs-original.svg'
    },
    {
      name: 'Tailwind',
      icon: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/tailwindcss/tailwindcss-plain.svg'
    },
    {
      name: 'HTML',
      icon: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/html5/html5-original.svg'
    },
    {
      name: 'CSS',
      icon: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/css3/css3-original.svg'
    },
    {
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/javascript/javascript-original.svg'
    }, {
      name: 'TypeScript',
      icon: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/typescript/typescript-original.svg'
    },
    {
      name: 'Bootstrap',
      icon: 'https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/bootstrap/bootstrap-plain.svg'
    }
  ]

  rating(tech: object) {
/*     name = tech.
 */    let card = document.getElementById("tech.name");
    console.log(card);

  }



}