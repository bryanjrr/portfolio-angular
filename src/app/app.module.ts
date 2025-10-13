import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
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

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
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
    HeaderComponent, // Import standalone component
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
