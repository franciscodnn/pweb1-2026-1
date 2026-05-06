import { Component, inject } from '@angular/core';
import { Validators, ValidatorFn, AbstractControl, ValidationErrors, 
  FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project-service';

// Validador customizado para o título
export function titleValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const title = String(control.value).trim();
    if (!title) return null;
    
    // Lógica de validação de duas palavras para o título
    const regex = /^[a-zA-Z0-9]+\s[a-zA-Z0-9]+$/;
    const valid = regex.test(title);
    
    return valid ? null : { invalidTitle: true };
  };
}

@Component({
  selector: 'app-form-save',
  imports: [ReactiveFormsModule],
  templateUrl: './form-save.html',
  styleUrl: './form-save.css',
})
export class FormSave {
  private projectService = inject(ProjectService);

  protected form = new FormGroup({
    title : new FormControl('', 
      [Validators.required, 
        Validators.minLength(5), titleValidator()]),
    description : new FormControl(''),
    techs: new FormControl(''),
    url: new FormControl('')
  });

  public save() {
    const newProject: Project = {
      title: this.title?.value ?? '',
      description: this.description?.value ?? '',
      techs: this.techs?.value?.split(', ') ?? [''],
      repoUrl: this.description?.value ?? '',

    }

    this.projectService.create(newProject);

    console.log(this.form.value);
  }

  get title() { return this.form.get('title'); }
  get description() { return this.form.get('description'); }
  get techs() { return this.form.get('techs'); }
  get url() { return this.form.get('url'); }
}
