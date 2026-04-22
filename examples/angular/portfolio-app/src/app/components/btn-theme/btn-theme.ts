import { Component, model, signal, input, output, WritableSignal, linkedSignal } from '@angular/core';

@Component({
  selector: 'app-btn-theme',
  imports: [],
  templateUrl: './btn-theme.html',
  styleUrl: './btn-theme.css',
})
export class BtnTheme {
  // public dark = input.required<boolean>();
  // protected _darkMode:WritableSignal<boolean> = linkedSignal(
  //   () => this.dark()
  // );

  // public changeTheme = output<boolean>();

  public darkModel = model.required<boolean>();

  protected toggleTheme(): void {
    this.darkModel.update( (value) => !value);
  }

  // protected toggleTheme(): void {
  //   this._darkMode?.update(dark => !dark);
  //   console.log('Dark??' + this._darkMode());

  //   this.changeTheme.emit(this._darkMode());
  // }

  /*
  ngOnInit() {
    this._darkMode?.set(this.dark());
  }
  */
}
