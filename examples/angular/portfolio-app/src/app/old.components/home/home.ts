import { Component, signal, inject } from '@angular/core';

import { RouterLink } from '@angular/router';
import { ProjectCard } from '../project-card/project-card';
import { ProjectsService } from '../../services/projects.service';
import { ThemeService } from '../../services/theme-service';

@Component({
  selector: 'app-home',
  imports: [ProjectCard, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // protected readonly darkMode = signal(true);
  protected readonly themeService = inject(ThemeService);

  private projectsService = inject(ProjectsService);

  protected readonly projects = this.projectsService.projects;
}
