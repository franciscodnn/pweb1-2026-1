import { Routes } from '@angular/router';
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';
import { NotFound } from './components/not-found/not-found';
import { DetailCard } from './components/detail-card/detail-card';
import { FormSave } from './components/form-save/form-save';

export const routes: Routes = [
    { path: '', component: Projects, title: 'Home'},
    { path: 'detail/:id', component: DetailCard, title: 'Detalhamento'},
    { path: 'about', component: About, title: 'Sobre o dev'},
    { path: 'projects/new', component: FormSave, title: 'Novo Projeto' },
    { path: '**', component: NotFound, title: 'Página não encontrada'}
];
