import { Component, input } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'project-card',
  imports: [TitleCasePipe],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  title = input.required<string>();
  description = input('');
  repoUrl = input('');
  techs = input.required<string[]>();
}
