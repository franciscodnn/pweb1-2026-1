import { Injectable, signal } from '@angular/core';
import { Project } from '../models/project.model';


@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private _projects = signal<Project[]>([
    
    {
      id: 1,
      title: 'Portfolio App',
      description: 'Este portfolio, desenvolvido com Angular e Tailwind CSS.',
      techs: ['ANGULAR', 'TYPESCRIPT', 'TAILWIND CSS'],
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

  get projects() {
    return this._projects.asReadonly();
  }

  public create(newProject: Project) {
    newProject.id = this._projects().length + 1;
    
    this._projects.set( [...this._projects(), newProject] );

    // this._projects.update( projects => [...projects, newProject] );
  }

  public removeById(id: number) {
    const filteredProjects = this._projects().filter(
      elem => {
        console.log(`${elem.id} === ${id}`);
        if (elem.id === id) return false;
        return true;
      }
    );

    this._projects.set(filteredProjects);

    console.log(filteredProjects);
  }
}
