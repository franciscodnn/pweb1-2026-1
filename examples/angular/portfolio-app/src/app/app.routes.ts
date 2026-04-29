import { Routes, ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';
import { NotFound } from './components/not-found/not-found';
import { DetailCard } from './components/detail-card/detail-card';
import { Project } from './models/project.model';
import { ProjectService } from './services/project-service';

const projectResolver: ResolveFn<Project | null> = (route) => {
  const id = Number(route.paramMap.get('id'));
  return inject(ProjectService).projects().find(p => p.id === id) ?? null;
};

const titleResolver: ResolveFn<string> = (route) => `Detalhes do Projeto ${route.paramMap.get('id')}`;

export const routes: Routes = [
    { path: '', component: Projects, title: 'Home'},
    { path: 'detail/:id', component: DetailCard, resolve: { project: projectResolver}, title: titleResolver },
    { path: 'about', component: About, title: 'Sobre o dev'},
    // { path: 'about', loadComponent: () => import('./components/about/about').then(m => m.About), title: 'Sobre o dev'},
    { path: '**', component: NotFound, title: 'Página não encontrada'}
];
