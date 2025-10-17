import { Component, Renderer2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})
export class AppComponent {
  title = 'portfolio-bryan';

  constructor(private router: Router, private renderer: Renderer2) {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      if (event.urlAfterRedirects.includes('/sobremi')) {
        this.renderer.addClass(document.body, 'no-parallax');
      } else {
        this.renderer.removeClass(document.body, 'no-parallax');
      }
    });
  }
}
