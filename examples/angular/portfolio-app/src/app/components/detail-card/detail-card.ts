import { Component, inject, signal, input, effect } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { ProjectsService } from '../../services/projects.service';
// import { Project } from '../../models/project';
import { ProjectService } from '../../services/project-service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-detail-card',
  imports: [],
  templateUrl: './detail-card.html',
  styleUrl: './detail-card.css',
})
export class DetailCard {
  id = input<string>('');
  project = signal<Project | null>(null);

  private route          = inject(ActivatedRoute);
  private router         = inject(Router);
  private projectService = inject(ProjectService);

  constructor() {
    // Leitura via parâmetro de rota: /projects/:id
    // this.route.params.subscribe(params => {
    //   const id = Number(params['id']);
    //   const found = this.projectService.projects().find(p => p.id === id) ?? null;
    //   this.project.set(found);
    // });

    // --- Versão com Query Parameter: /projects?id=1 ---
    // this.route.queryParams.subscribe(params => {
    //   console.log('Query Params:', params);
    //   const id = Number(params['id']);
    //   const found = this.projectService.projects().find(p => p.id === id) ?? null;
    //   this.project.set(found);
    // });

    effect(() => {
       const id = Number(this.id());
       console.log('ID from input signal:', id);
       const found = this.projectService.projects().find(p => p.id === id) ?? null;
       this.project.set(found);
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
