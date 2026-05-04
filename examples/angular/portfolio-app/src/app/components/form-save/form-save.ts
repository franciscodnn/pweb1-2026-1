import { Component } from '@angular/core';
import { Validators, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-save',
  imports: [ReactiveFormsModule],
  templateUrl: './form-save.html',
  styleUrl: './form-save.css',
})
export class FormSave {
  protected form = new FormGroup({
    title : new FormControl('', 
      [Validators.required, Validators.minLength(5)]),
    description : new FormControl(''),
    techs: new FormControl(''),
    url: new FormControl('')
  });

  public save() {
    console.log(this.form.value);
  }
}
