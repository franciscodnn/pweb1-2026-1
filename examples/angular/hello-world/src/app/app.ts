import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',  
  templateUrl: './app.html',
  // template: `
  //   <main><h1 class='text-center text-4xl'>Olá, Mundo!</h1></main>
  // `,
  // styleUrl: './app.css'
})
export class App {
  private static CSS_DARK = 'bg-black text-white';
  private static CSS_WHITE = 'bg-white text-black';

  private static THEME_WHITE = 'white';
  private static THEME_DARK = 'dark';

  private static CSS_THEMES = {
    dark: App.CSS_DARK,
    white: App.CSS_WHITE
  };

  protected readonly title = signal('hello-world');
  
  // possible values for theme: white or dark
  protected theme = signal(App.THEME_WHITE); 
  protected cssTheme = signal(App.CSS_THEMES.white);

  public toggleTheme() {
    console.log(`${this.theme()} - ${this.cssTheme()}`)
    if(this.theme() === App.THEME_WHITE) {
      this.cssTheme.set(App.CSS_THEMES.dark);
      this.theme.set(App.THEME_DARK);

      return;
    }

    this.cssTheme.set(App.CSS_THEMES.white);
    this.theme.set(App.THEME_WHITE);
  }
}
