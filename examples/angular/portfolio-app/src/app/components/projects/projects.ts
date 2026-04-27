import { Component, inject } from '@angular/core';
import { ProjectService } from '../../services/project-service';
import { ProjectCard } from '../project-card/project-card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard, RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  private projectService = inject(ProjectService);

  protected readonly projects = this.projectService.projects;
}
