import { Routes, ResolveFn } from '@angular/router';
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';
import { NotFound } from './components/not-found/not-found';
import { DetailCard } from './components/detail-card/detail-card';
import { FormSave } from './components/form-save/form-save';

const titleResolver: ResolveFn<string> = 
  (route) => `Produto #${route.paramMap.get('id')}`;

export const routes: Routes = [
    { path: '', component: Projects, title: 'Home'},
    { path: 'detail/:id', component: DetailCard, title: titleResolver},
    // { path: 'detail', component: DetailCard, title: titleResolver},
    { path: 'about', component: About, title: 'Sobre o dev'},
    { path: 'projects/new', component: FormSave, title: 'Novo Projeto' },
    { path: '**', component: NotFound, title: 'Página não encontrada'}
];
