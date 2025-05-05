import { Component, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-estudios',
  standalone: false,
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class estudiosComponent {
  tarjetas: any[] = [
    {
      imagen: 'assets/formacion/pompeu_fabra.jpg',
      alt: 'compotech',
      titulo: 'Instituto Pompeu Fabra | ESO (2017-2021)',
      descripcion: 'Durante los años 2017-2021 realicé la Educacion Secundaria Obligatoria donde adquiri conocimientos generales y me permitieron seguir los estudios mas enfocados en lo que me gusta que es la informatica',
      enlace: '#'
    },
    {
      imagen: 'assets/formacion/stucom.jpg',
      alt: 'compotech',
      titulo: 'STUCOM | Grado Medio: Sistemas Microinformaticos y Redes (2021-2023)',
      descripcion: 'Durante los años 2021-2023 seguí mis estudios en un centro donde adquirí conocimientos sobre la informatica. Tanto bases de programacion, Montaje de Ordenadores, Conocimientos de Software y Hardware etc.',
      enlace: '#'
    },
    {
      imagen: 'assets/formacion/salvador-espriu.webp',
      alt: 'compotech',
      titulo: 'Escola Salvador Espriu | Prácticas',
      descripcion: 'En mi segundo año de Grado Medio, empecé las practicas en una escuela como tecnico informatico. Me dedicaba al mantenimiento de ordenadores tanto hardware como software y acudia cuando algun miembro de la escuala tenia problemas con el ordenador',
      enlace: '#'
    },
    {
      imagen: 'assets/formacion/stucom.jpg',
      alt: 'compotech',
      titulo: 'STUCOM | Grado Superior Desarrollo de Aplicaciones Web (2023-2025)',
      descripcion: 'Una vez acabe el grado medio, en 2023 empecé en el mundo del desarrollo de paginas web donde adquirí bases solidas de lenguajes de progrmacion y frameworks actuales, siendo capaz de poder trabajar en el sector.',
      enlace: '#'
    },
    {
      imagen: 'assets/formacion/strategying.jpg',
      alt: 'compotech',
      titulo: 'Strategying |  Prácticas ',
      descripcion: 'En el segundo año de Grado Superior, hice las practicas en la empresa Strategying en un puesto como desarrollador backend donde trabaje con el framework Laravel y con Livewire.',
      enlace: '#'
    },


  ]

}

