import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { TechIconsComponent } from './tech-icons/tech-icons.component';
import { SobremiComponent } from './sobremi/sobremi.component';
import { MisProyectos } from './mis-proyectos/mis-proyectos.component';
import { estudiosComponent } from './estudios/estudios.component';
import { proyectoDetalles } from './proyecto/proyecto.component';
import { HomeComponent } from './home-component/home.component';
import { MiValorComponent } from './mi-valor/mi-valor.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    TechIconsComponent,
    SobremiComponent,
    MisProyectos,
    estudiosComponent,
    proyectoDetalles,
    HomeComponent,
    MiValorComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HeaderComponent, // Import standalone component
    InicioComponent, // Import standalone component
    HttpClientModule,
    MatCardModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
