import { booleanAttribute, Component, input, model, output } from '@angular/core';

@Component({
  selector: 'theme-button',
  imports: [],
  templateUrl: './theme-button.html',
  styleUrl: './theme-button.css',
})
export class ThemeButton {
  // protected readonly darkMode = signal(true);
  // public readonly darkMode = input(false, {transform: booleanAttribute});
  // protected changeToDarkMode = output<boolean>();
  public darkMode = model<boolean>(false);

  protected toggleTheme(): void {
    this.darkMode.update(dark => !dark);
    // this.changeToDarkMode.emit(this.darkMode());
  }
}
