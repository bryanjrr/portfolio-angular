import { Component, OnInit, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

// Declara tsParticles para que TypeScript no se queje de que no existe en el scope global.
declare let tsParticles: any;

// Interfaz para la información del commit
export interface LatestCommitInfo {
  repo: string;
  message: string;
}

@Component({
  selector: 'app-inicio', // Cambiado al nombre original del componente
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InicioComponent implements OnInit, AfterViewInit {
  private cdr = inject(ChangeDetectorRef);
  latestCommitInfo: LatestCommitInfo | null = null;
  isLoading = true;

  typedText: string = '';
  private fullText: string = 'Desarrollador Fullstack Junior';
  private currentIndex: number = 0;

  ngOnInit(): void {
    // Simulación de la llamada a la API de GitHub.
    // Reemplaza esto con tu servicio real.
    of({ repo: 'portfolio-v2', message: 'feat: Añadir sección de presentación animada' })
      .pipe(delay(2500)) // Simula el tiempo de carga
      .subscribe({
        next: (info) => {
          this.latestCommitInfo = info;
          this.isLoading = false;
          this.cdr.markForCheck();
        },
        error: () => {
          // Si hay un error o no se encuentra el commit
          this.latestCommitInfo = null;
          this.isLoading = false;
          this.cdr.markForCheck();
        }
      });
      
    this.setupTypingAnimation();
  }
  
  async ngAfterViewInit(): Promise<void> {
    try {
      await Promise.all([
        this.loadStylesheet('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'),
        this.loadScript('https://cdn.jsdelivr.net/npm/tsparticles@2/tsparticles.bundle.min.js')
      ]);
      await this.initParticles();
    } catch (error) {
      console.error('Error loading external resources:', error);
    }
  }

  private setupTypingAnimation(): void {
    const type = () => {
      if (this.currentIndex < this.fullText.length) {
        this.typedText += this.fullText.charAt(this.currentIndex);
        this.currentIndex++;
        this.cdr.markForCheck(); // Forzar la detección de cambios
        setTimeout(type, 100);
      }
    };
    // Inicia la animación después de un breve retraso
    setTimeout(type, 800);
  }

  private loadScript(url: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const scriptId = 'tsparticles-script';
      if (document.getElementById(scriptId)) {
        resolve();
        return;
      }
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = url;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Failed to load script: ${url}`));
      document.body.appendChild(script);
    });
  }

  private loadStylesheet(url: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const styleId = 'fontawesome-stylesheet';
      if (document.getElementById(styleId)) {
        resolve();
        return;
      }
      const linkEl = document.createElement('link');
      linkEl.id = styleId;
      linkEl.rel = 'stylesheet';
      linkEl.href = url;
      linkEl.onload = () => resolve();
      linkEl.onerror = () => reject(new Error(`Failed to load stylesheet: ${url}`));
      document.head.appendChild(linkEl);
    });
  }

  private async initParticles(): Promise<void> {
    if (typeof tsParticles === 'undefined') {
      console.error('tsParticles not loaded');
      return;
    }
    await tsParticles.load("tsparticles", {
      fpsLimit: 60, // Limita los FPS para menos uso de CPU
      background: {
        color: "#0A0A1F",
      },
      interactivity: {
        events: {
          onHover: { enable: false },
          onClick: { enable: false },
        },
      },
      particles: {
        color: { value: "#00F0FF" },
        move: {
          direction: "top",
          enable: true,
          speed: 0.5, // Menor velocidad para menos cálculos
          straight: true,
          outModes: { default: "out" },
        },
        number: {
          density: { enable: true, area: 1000 },
          value: 18, // Menos partículas para mejor rendimiento
        },
        opacity: { value: { min: 0.3, max: 0.5 } },
        shape: {
          type: "char",
          options: {
            char: {
              value: ["</>", "{ }", "()", ";", "=>"], // Menos variedad
              font: "Courier New",
              style: "",
              weight: "500",
              fill: true,
            },
          },
        },
        size: { value: { min: 12, max: 18 } }, // Partículas más pequeñas
      },
      detectRetina: false, // Desactiva retina para menos cálculos
    });
  }
}
