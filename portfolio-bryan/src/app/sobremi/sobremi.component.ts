import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { ViewEncapsulation } from '@angular/core';
declare var particlesJS: any;


@Component({
  selector: 'app-sobremi',
  standalone: false,
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css'],
  encapsulation: ViewEncapsulation.None // 👈 añade esto

})
export class SobremiComponent implements AfterViewInit {

  private mapa: L.Map | undefined;
  email: string = "bryanjoyarubio@gmail.com";
  getArray(n: number): number[] {
    return Array.from({ length: n }, (_, i) => i);
  }
  secciones: any = [
    {
      nombre: "Informacion Personal",
      icono: "fa-address-card",
      descripcion: `Soy Bryan Joya, tengo 19 años y resido en Barcelona, Cataluña. Recientemente he
              terminado el Ciclo Superior de Desarrollo de Aplicaciones WEB donde he adquirido conocimientos sobre la
              creación y gestión de páginas Web. Actualmente me gustaría aplicar a un puesto de trabajo como desarrollador
              FrontEnd o Backend y cuando comience septiembre, compaginarlo con el curso que quiero hacer, que es Ciclo
              Superior de Desarrollo de Aplicaciones Móviles.
  
              Empecé en este mundo ya que me atrajo mucho la idea el hecho de poder crear una página web para un proyecto
              que estaba haciendo con un amigo mío con el objetivo de conseguir más clientes. También me atraía mucho la
              idea de poder crear una página web llamativa y usable para cualquier tipo de usuario.`
    },
    {
      nombre: "Habilidades Tecnicas",
      icono: "fa-code",
      habilidades: [
        { nombre: "Comunicación", nivel: 4 },
        { nombre: "Trabajo en Equipo", nivel: 5 },
        { nombre: "Actitud Positiva", nivel: 4 },
        { nombre: "Empatía", nivel: 4 },
        { nombre: "Optimista", nivel: 3 },
        { nombre: "Implicación", nivel: 5 },
        { nombre: "Constante", nivel: 5 }
      ]
    }, {
      nombre: "Hobbies",
      icono: "fa-code",
      hobbies: [
        { nombre: "VideoJuegos", icono: "fa-gamepad" },
        { nombre: "Peliculas", icono: "fa-popcorn" },
        { nombre: "Lectura (Desarrollo Personal)", icono: "fa-book-open-cover" },
        { nombre: "Deporte", icono: "fa-dumbbell" },
      ]
    },
  ];

  ngAfterViewInit(): void {
    const redIcon = new L.Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });


    this.mapa = L.map('mapa').setView([41.4469, 2.2450], 13); // Coordenadas de Badalona

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    }).addTo(this.mapa);

    L.marker([41.4469, 2.2450], { icon: redIcon })
      .addTo(this.mapa)

  }

}

