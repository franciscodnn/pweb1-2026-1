import { Component, signal, inject } from '@angular/core';
import { ProjectCard } from './components/project-card/project-card';
import { Project } from './models/project.model';
import { ProjectService } from './services/project-service';

@Component({
  selector: 'app-root',
  imports: [ProjectCard],
  templateUrl: './app.html',
  styleUrl: './app.css',
  host: { '[class.dark]': 'darkMode()' },
})
export class App {
  private projectService = inject(ProjectService);
  protected readonly darkMode = signal(true);

  protected toggleTheme(): void {
    this.darkMode.update(dark => !dark);
  }

  protected readonly projects = this.projectService.projects;
}
