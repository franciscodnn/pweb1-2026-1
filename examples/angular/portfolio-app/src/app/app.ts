import { Component, signal, inject } from '@angular/core';
import { Project } from './models/project.model';
import { BtnTheme } from './components/btn-theme/btn-theme';

import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [BtnTheme, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
  host: { '[class.dark]': 'darkMode()' },
})
export class App {  
  protected readonly darkMode = signal(true);

  protected switchTheme(event: boolean) {
    this.darkMode.set(event);
  }

}
