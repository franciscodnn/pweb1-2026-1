import { inject, Injectable, signal } from '@angular/core';
import { Project } from '../models/project.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private api = inject(HttpClient);
  private apiUrl = 'https://ebtckzlaqfdvxpgvajsj.supabase.co/rest/v1';
  private token = 'sb_publishable_y9cj3uKhm6gl853rnu3zFA_UmZC5M54';

  constructor() {
    this.load();
  }

  private get headers() {
    return {
      'apikey': this.token,
      'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=representation'
    };
  }


  public load(): void {
    this.api.get<Project[] | null>(`${this.apiUrl}/project`, {
      headers: this.headers
    }).subscribe({
      next: (projects) => {
        console.log(projects);
        this._projects.set(projects);
      }
    });
  }


  private _projects = signal<Project[] | null>([
    
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
    // newProject.id = this._projects().length + 1;
    
    // this._projects.set( [...this._projects() ?? [], newProject] );

    this.api.post(`${this.apiUrl}/project`, newProject, {
      headers: this.headers
    }).subscribe({
      next: (project) => {
        console.log(project);
        this._projects.set( [...this._projects() ?? [], newProject] );      
      }
    });

    // this._projects.update( projects => [...projects, newProject] );
  }

  public removeById(id: number) {
    const filteredProjects = this._projects()?.filter(
      elem => {
        console.log(`${elem.id} === ${id}`);
        if (elem.id === id) return false;
        return true;
      }
    );

    this._projects.set(filteredProjects ?? null);

    this.api.delete(`${this.apiUrl}/project?id=eq.${id}`, {
      headers: this.headers
    }).subscribe({
      next: (project) => console.log(project)
    });

    console.log(filteredProjects);
  }
}
