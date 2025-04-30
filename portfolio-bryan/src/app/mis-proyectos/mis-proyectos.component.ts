import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
declare var particlesJS: any;


@Component({
  selector: 'app-misproyectos',
  standalone: false,
  templateUrl: './mis-proyectos.component.html',
  styleUrls: ['./mis-proyectos.component.css']
})

interface Proyecto {
  titulo: string;
  descripcion: string;
  tecnologiasFrontend: string[];
  tecnologiasBackend: string[];
  repoUrl?: string;
}

export class MisProyectos {

  proyectos: any = [
    {
      titulo: 'Gestión Personas',
      descripcion: `En mi 1r año de DAW empecé programando con el lenguaje Java donde conseguí adquirir bases sólidas que me permitieron hacer este programa con interfaz gráfica, encargada de la gestión de personas y vehículos.`,
    },
  ];



}
