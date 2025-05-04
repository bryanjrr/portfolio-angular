import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MisProyectos } from './mis-proyectos/mis-proyectos.component';
import { proyectoDetalles } from './proyecto/proyecto.component';

const routes: Routes = [
  { path: '', component: MisProyectos },
  { path: 'proyecto/:nombre', component: proyectoDetalles },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
