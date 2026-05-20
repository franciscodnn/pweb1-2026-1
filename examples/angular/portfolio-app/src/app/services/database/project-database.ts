import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectDatabase {
  private api = inject(HttpClient);
  private apiUrl = 'https://ebtckzlaqfdvxpgvajsj.supabase.co/rest/v1';
  private token = 'sb_publishable_y9cj3uKhm6gl853rnu3zFA_UmZC5M54';

  private get headers() {
    return {
      'apikey': this.token,
      'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=representation'
    };
  }

  public read(): Observable<Project[] | null> {
    return this.api.get<Project[] | null>(`${this.apiUrl}/project`, {
      headers: this.headers
    });
  }
}
