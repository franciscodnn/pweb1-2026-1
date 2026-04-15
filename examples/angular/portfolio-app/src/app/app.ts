import { Component, signal } from '@angular/core';

interface Project {
  id: number;
  title: string;
  description: string;
  techs: string[];
  repoUrl: string;
}

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
  host: { '[class.dark]': 'darkMode()' },
})
export class App {
  protected readonly darkMode = signal(true);

  protected toggleTheme(): void {
    this.darkMode.update(dark => !dark);
  }

  protected readonly projects = signal<Project[]>([
    {
      id: 1,
      title: 'Portfolio App',
      description: 'Este portfolio, desenvolvido com Angular e Tailwind CSS.',
      techs: ['Angular', 'TypeScript', 'Tailwind CSS'],
      repoUrl: 'https://github.com',
    },
    {
      id: 2,
      title: 'Task Manager API',
      description: 'API RESTful para gerenciamento de tarefas com autenticacao JWT.',
      techs: ['NestJS', 'TypeScript', 'PostgreSQL'],
      repoUrl: 'https://github.com',
    },
    {
      id: 3,
      title: 'E-commerce Dashboard',
      description: 'Painel administrativo com graficos em tempo real e gestao de pedidos.',
      techs: ['Angular', 'TypeScript', 'Node.js'],
      repoUrl: 'https://github.com',
    },
  ]);
}
