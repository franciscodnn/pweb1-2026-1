import { Component, signal, inject } from '@angular/core';
import { Project } from './models/project.model';
import { BtnTheme } from './components/btn-theme/btn-theme';

import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [BtnTheme, RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
  host: { '[class.dark]': 'themeService.darkMode()' },
})
export class App {  
  protected themeService = {
    darkMode: signal(true)
  };

  // protected readonly darkMode = signal(true);

  protected switchTheme(event: boolean) {
    this.themeService.darkMode.set(event);
  }

}
