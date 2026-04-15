import { Component, input } from '@angular/core';

@Component({
  selector: 'project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  title = input.required<string>();
  description = input('');
  repoUrl = input('');
  techs = input.required<string[]>();
}
