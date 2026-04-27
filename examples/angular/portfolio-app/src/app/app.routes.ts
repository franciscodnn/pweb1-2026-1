import { Routes } from '@angular/router';
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';
import { NotFound } from './components/not-found/not-found';
import { DetailCard } from './components/detail-card/detail-card';

export const routes: Routes = [
    { path: '', component: Projects, title: 'Home'},
    { path: 'detail/:id', component: DetailCard, title: 'Detalhamento'},
    { path: 'about', component: About, title: 'Sobre o dev'},
    { path: '**', component: NotFound, title: 'Página não encontrada'}
];
