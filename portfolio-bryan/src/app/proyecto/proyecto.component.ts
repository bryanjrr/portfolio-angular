import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proyecto',
  standalone: false,
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css'],
})
export class proyectoDetalles {
  proyectoNombre!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.proyectoNombre = this.route.snapshot.paramMap.get('nombre')!;
  }

  proyectos: any[] = [
    {
      titulo: 'Gestión Personas',
      descripcion1:
        'En mi 1r año de DAW empecé programando con el lenguaje Java donde conseguí adquirir bases sólidas que me permitieron hacer este programa con interfaz gráfica, encargada de la gestión de personas y vehículos.',
      descripcion2:
        'El Programa se encarga de poder gestionar diversas funcionalidades de gestión sobre empleados y clientes. Este programa sería ideal para una empresa que quiera tener un control sobre los clientes y empleados que hay actualmente. Alta de nuevas personas: Cuando damos de alta una nueva persona, tenemos la opción de dar de alta a un empleado o a un cliente. Una vez seleccionado el tipo persona, tenemos una interfaz donde tenemos la posibilidad de introducir todos los datos correspondientes de la persona. También es posible añadir vehículos y vincularlos a las personas registradas en el sistema. Cada vehículo incluye información como la marca, modelo, matrícula, y otros datos importantes. Buscar: En caso de que queramos ver un listado de personas con un nombre en específico, esta funcionalidad lo hace y te da como resultado un listado de todos usuarios junto a información adicional. Mostrar uno: En 3r lugar también hay una funcionalidad donde puedes buscar por a un cliente o empleado mediante su DNI y como resultado te mostrará los datos de la persona. Actualización de datos: El sistema permite modificar la información existente de personas registradas. Esto incluye la actualización de datos personales o la adición/eliminación de vehículos asociados. Eliminación de personas: Los usuarios tienen la opción de dar de baja a personas del sistema, lo que elimina también la relación con cualquier vehículo que estuviera registrado.',
      videos: [
        {
          titulo: 'Anuncio Gestión Personas',
          enlace: 'https://www.youtube.com/embed/NWpPXzwKLD8',
        },
      ],
      icono: 'fa-solid fa-person',
      imagen: 'assets/Proyectos/GestionPersonas/personasuf6.png',
      tecnologias: [
        {
          categoria: 'Frontend',
          lista: [{ nombre: 'JFrame', icono: 'fa-solid fa-frame' }],
        },
        {
          categoria: 'Backend',
          lista: [
            { nombre: 'Java', icono: 'fa-brands fa-java' },
            { nombre: 'MySQL', icono: 'fa-solid fa-database' },
          ],
        },
      ],
      enlaceRepositorio:
        'https://github.com/bryanjrr/Gestion-Personas-Java.git',
      enlaceMasInfo: '#',
      enlacesAdicionales: [],
    },
    {
      titulo: 'CompoTech',
      descripcion1:
        'En mi 1r año de Ciclo Superior de Desarrollo de Aplicaciones Web desarrollé junto a mis compañeros Marc y David un proyecto donde simulamos la creación de una empresa llamada Compotech que se dedicaba a la venta de componentes informáticos.',
      descripcion2:
        'En primer lugar empezamos creando un documento donde explicamos la historia, y cómo surgió la idea de Compotech, el valor que aportamos como empresa y a qué público va dirigida nuestra empresa. Una vez hecho eso, hicimos un estudio de mercado para saber la competencia que tenemos, la cantidad de personas que les interesa adquirir productos de nuestro negocio y un anuncio para la empresa. Una vez valoramos si la empresa podía seguir adelante, empezamos con la creación de la paleta de colores de la empresa y su logo y una vez hecho eso empezamos con un programa llamado Figma donde realizamos el diseño UI/UX de la aplicación web en entorno móvil, siguiendo el procedimiento llamado Mobile First. Después de eso hicimos el diseño para tablets y por último lo adaptamos para entorno de ordenador y comenzamos a programarlo mediante los lenguajes HTML, CSS en la parte de FrontEnd y PHP en la parte de Backend con una base de datos creada mediante MySQL.',
      videos: [
        {
          titulo: 'Anuncio Compotech',
          enlace: 'https://www.youtube.com/embed/-KUTJPR2IiM',
        },
        {
          titulo: 'Preview Página Web',
          enlace: 'https://www.youtube.com/embed/3phA5ZauAO0',
        },
      ],
      icono: 'fa-solid fa-microchip',
      imagen: 'assets/Proyectos/Compotech/Compotech.png',
      tecnologias: [
        {
          categoria: 'Frontend',
          lista: [
            { nombre: 'HTML', icono: 'fa-brands fa-html5' },
            { nombre: 'CSS', icono: 'fa-brands fa-css3' },
          ],
        },
        {
          categoria: 'Backend',
          lista: [
            { nombre: 'PHP', icono: 'fa-brands fa-symfony' },
            { nombre: 'MySQL', icono: 'fa-solid fa-database' },
          ],
        },
      ],
      enlaceRepositorio: 'https://github.com/bryanjrr/Compotech.git', // Reemplaza con el enlace real
      enlaceMasInfo: '#',
      enlacesAdicionales: [
        {
          titulo: 'Documento Historia + Estudio de Mercado + DAFO',
          enlace:
            'https://drive.google.com/file/d/1GfyvzS-tpN9r1-PQE-V4NS8FOCBGRtIN/view?usp=sharing',
          icono: 'fa-brands fa-google-drive',
        },
        {
          titulo: 'Documento Creación de Logo',
          enlace:
            'https://docs.google.com/document/d/12GAvcd4OuXNkvyN_7zHLhrTJZkuHWPFraxP3bL88vwI/edit?usp=sharing',
          icono: 'fa-solid fa-pen-ruler',
        },
        {
          titulo: 'Preview diseño UI/UX (Figma)',
          enlace:
            'https://www.figma.com/design/H8nN2nrL3Af6dqY1BX7Cbr/Compo-Tech?node-id=802-154&p=f',
          icono: 'fa-brands fa-figma',
        },
        {
          titulo: 'Documento Mapa de la Empatía',
          enlace:
            'https://drive.google.com/file/d/1vKKssIEv9g5IXThVRCl48l1WIg873lyc/view?usp=sharing',
          icono: 'fa-solid fa-map',
        },
      ],
    },
    {
      titulo: 'Blog Bryan',
      descripcion1:
        'En DAW 2 durante mi estancia en la empresa Strategying realicé una página web donde los usuarios pueden publicar su propio blog con la posibilidad de personalizarlo y ver posts de cualquier temática.',
      descripcion2:
        'Mediante Laravel y Livewire he programado una página web de blogs donde un usuario no registrado puede ver todos los blogs que han subido otros usuarios, también puedes registrarte en caso de que sea tu primera vez en la página web, o iniciar sesión. Si estás logueado en la página web, puedes acceder a las siguientes funcionalidades: Sistema de comentarios: Si el usuario hace clic a un blog, se muestra el título del blog junto al autor y el contenido. En la parte inferior, el usuario tiene la posibilidad de comentar en el post y los otros usuarios que entren al blog podrán responder a ese comentario, o hacer nuevos comentarios. Creación de un Blog: El usuario tiene una interfaz donde puede crear un nuevo blog si lo desea con información detallada como el título, descripción, género e imagen. Actualización de un Blog: En caso de que el usuario quiera hacer cambios en el blog que ya ha publicado previamente, también tiene la posibilidad de realizar cualquier cambio del blog. Borrar Blog: En caso de que ese usuario quiera eliminar algún blog por cualquier motivo, tiene un botón donde puede eliminarlo. Sistema de Búsqueda: Hayas iniciado sesión o no, tienes la posibilidad de buscar un blog por el nombre o mediante un filtro de género.',
      videos: [],
      icono: 'fa-solid fa-envelopes-bulk',
      imagen: 'assets/Proyectos/BlogBryan/blogbryan.png',
      tecnologias: [
        {
          categoria: 'Frontend',
          lista: [
            { nombre: 'HTML', icono: 'fa-brands fa-html5' },
            { nombre: 'Javascript', icono: 'fa-brands fa-js' },
            { nombre: 'AlpineJS', icono: 'fa-brands fa-js' },
            { nombre: 'Livewire', icono: '' },
            { nombre: 'Tailwind', icono: 'fa-brands fa-css3' },
          ],
        },
        {
          categoria: 'Backend',
          lista: [
            { nombre: 'Laravel', icono: 'fa-brands fa-laravel' },
            { nombre: 'HeidiSQL', icono: 'fa-solid fa-database' },
          ],
        },
      ],
      enlaceRepositorio: 'https://github.com/bryanjrr/BlogBryan.git', // Reemplaza con el enlace real
      enlaceMasInfo: '#',
      enlacesAdicionales: [],
    },
    {
      titulo: 'CineFlix',
      descripcion1:
        'Actualmente estoy en 2ndo año de DAW, y junto a mis compañeros Pol Carvajal y Marc Muntané estamos programando esta página web donde cuentas con un gran catálogo de películas de todo tipo disponibles para ver!',
      descripcion2:
        'CineFlix es una plataforma web que permite a los usuarios explorar, crear, editar y eliminar películas de un catálogo extenso. La aplicación cuenta con un panel de administración donde se pueden gestionar los detalles de las películas, incluyendo título, descripción, año, duración, póster, tráiler y actores asociados. Los usuarios pueden seleccionar múltiples actores para cada película y visualizar la información de manera organizada en una interfaz moderna y responsiva.',
      videos: [],
      icono: 'fa-solid fa-film',
      imagen: 'assets/Proyectos/Cinefix/cineflix.png',
      tecnologias: [
        {
          categoria: 'Frontend',
          lista: [
            { nombre: 'Angular', icono: 'fa-brands fa-angular' },
            { nombre: 'Tailwind', icono: 'fa-brands fa-css3' },
          ],
        },
        {
          categoria: 'Backend',
          lista: [
            { nombre: 'Symfony', icono: 'fa-brands fa-symfony' },
            { nombre: 'MySQL', icono: 'fa-solid fa-database' },
          ],
        },
      ],
      enlaceRepositorio: 'https://github.com/bryanjrr/CineFlix.git', // Reemplaza con el enlace real
      enlaceMasInfo: '#',
      enlacesAdicionales: [],
    },
  ];

  toggleMasInfo(index: number): void {
    this.proyectos[index].mostrarMasInfo =
      !this.proyectos[index].mostrarMasInfo;
  }
}
