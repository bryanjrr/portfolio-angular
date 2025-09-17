import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-misproyectos',
  standalone: false,
  templateUrl: './mis-proyectos.component.html',
  styleUrls: ['./mis-proyectos.component.css'],
})

/* interface Proyecto {
  titulo: string;
  descripcion: string;
  tecnologiasFrontend: string[];
  tecnologiasBackend: string[];
  repoUrl?: string;
} */
export class MisProyectos {

  proyectos: any[] = [
    {
      titulo: 'Gestión Personas',
      descripcion:
        'En mi 1r año de DAW empecé programando con el lenguaje Java donde conseguí adquirir bases sólidas que me permitieron hacer este programa con interfaz gráfica, encargada de la gestión de personas y vehículos.',
      icono: 'fas fa-user',
      imagen: 'assets/Proyectos/GestionPersonas/personasuf6.png',
      tecnologias: [
        {
          categoria: 'Frontend',
          lista: [{ nombre: 'JFrame', icono: 'fas fa-window-maximize' }],
        },
        {
          categoria: 'Backend',
          lista: [
            { nombre: 'Java', icono: 'fab fa-java' },
            { nombre: 'MySQL', icono: 'fas fa-database' },
          ],
        },
      ],
      enlaceRepositorio:
        'https://github.com/bryanjrr/Gestion-Personas-Java.git',
      enlaceMasInfo: '#',
    },
    {
      titulo: 'CompoTech',
      descripcion:
        'En mi 1r año de Ciclo Superior de Desarrollo de Aplicaciones Web desarrollé junto a mis compañeros Marc y David un proyecto donde simulamos la creación de una empresa llamada CompoTech que se dedicaba a la venta de componentes informáticos.',
      icono: 'fas fa-store',
      imagen: 'assets/Proyectos/Compotech/Compotech.png',
      tecnologias: [
        {
          categoria: 'Frontend',
          lista: [
            { nombre: 'HTML', icono: 'fab fa-html5' },
            { nombre: 'CSS', icono: 'fab fa-css3-alt' },
          ],
        },
        {
          categoria: 'Backend',
          lista: [
            { nombre: 'PHP', icono: 'fab fa-php' },
            { nombre: 'MySQL', icono: 'fas fa-database' },
          ],
        },
      ],
      enlaceRepositorio: '#',
      enlaceMasInfo: '#',
    },
    {
      titulo: 'Blog Bryan',
      descripcion:
        'En DAW 2 durante mi etapa de en la empresa Strategyng realicé una página web donde los usuarios pueden publicar su propio blog, con la posibilidad de personalizar y ver posts de cualquier temática.',
      icono: 'fas fa-blog',
      imagen: 'assets/Proyectos/BlogBryan/blogbryan.png',
      tecnologias: [
        {
          categoria: 'Frontend',
          lista: [
            { nombre: 'HTML', icono: 'fab fa-html5' },
            { nombre: 'Javascript', icono: 'fab fa-js' },
            { nombre: 'AlpineJS', icono: 'fas fa-code' },
            { nombre: 'Livewire', icono: 'fas fa-bolt' },
            { nombre: 'Tailwind', icono: 'fab fa-tailwind' },
          ],
        },
        {
          categoria: 'Backend',
          lista: [
            { nombre: 'Laravel', icono: 'fab fa-laravel' },
            { nombre: 'HeidiSQL', icono: 'fas fa-database' },
          ],
        },
      ],
      enlaceRepositorio: 'https://github.com/bryanjrr/blog-bryan',
      enlaceMasInfo: '#',
    },
    {
      titulo: 'CineFlix',
      descripcion:
        'Actualmente estoy en 2ndo año de DAW, y junto a mis compañeros Pol Carvajal y Marc Muntané estamos programando una página web donde donde cuentas con un gran catálogo de películas de todo tipo disponibles para ver!',
      icono: 'fas fa-film',
      imagen: 'assets/Proyectos/Cinefix/cineflix.png',
      tecnologias: [
        {
          categoria: 'Frontend',
          lista: [{ nombre: 'Tailwind', ç: 'fab fa-tailwind' }],
        },
        {
          categoria: 'Backend',
          lista: [
            { nombre: 'Symfony', icono: 'fab fa-symfony' },
            { nombre: 'MySQL', icono: 'fas fa-database' },
          ],
        },
      ],
      enlaceRepositorio: 'https://github.com/Peke2005/CineFlix_Frontend',
      enlaceMasInfo: '#',
    },
  ];

  constructor() { }

  ngOnInit(): void { }
}
