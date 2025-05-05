import { Component } from '@angular/core';

@Component({
  selector: 'app-mi-valor',
  standalone: false,
  templateUrl: './mi-valor.component.html',
  styleUrl: './mi-valor.component.css'
})
export class MiValorComponent {
  habilidades: any[] = [
    {
      titulo: 'Dedicación',
      descripcion: `Mi dedicación puede resultar en una mejora positiva de la productividad de la empresa, ya que tiendo a ser más eficiente y a completar las tareas de manera más rápida y precisa. Además, trabajo de forma cuidadosa, lo que contribuye a elevar la calidad del trabajo.`
    },
    {
      titulo: 'Trabajo en equipo',
      descripcion: `En segundo lugar puedo aportar es el trabajo en equipo donde puede ser efectivo para la empresa y puede aumentar la productividad gracias a que un grupo de personas pueden aportar una solución más rápida que una. Y tener una habilidad como esta puede hacer que a la hora de realizar proyectos haya un ambiente mucho mejor y surjan buenas ideas que repercutirán positivamente a la empresa.
`    },
    {
      titulo: 'Aprendizaje',
      descripcion: `Tengo una gran facilidad para aprender rápidamente: cuando me enfrento a un proyecto con tecnologías que aún no domino, me involucro a fondo en su estudio y práctica para alcanzar un dominio sólido. De ese modo, no solo mejoro mi rendimiento, sino que también aporto soluciones de mayor calidad y eficacia al equipo.`
    }
  ];
}
