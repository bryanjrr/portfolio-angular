import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { TechIconsComponent } from './tech-icons/tech-icons.component';
import { SobremiComponent } from './sobremi/sobremi.component';
import { MisProyectos } from './mis-proyectos/mis-proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    TechIconsComponent,
    SobremiComponent,
    MisProyectos
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }