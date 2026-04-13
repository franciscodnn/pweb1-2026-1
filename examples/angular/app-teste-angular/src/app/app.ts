import { Component, signal } from '@angular/core';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [Footer]
  /*
  template: `
    <h1 class="text-center">Olá, Mundo!</h1>
    <h2>Direto do TS!</h2>
  `
  */  
  // styleUrl: './app.css'
})
export class App {
  // const [teste, setTeste] = useState('teste');
  protected readonly title = signal('app-teste-angular');
  public disciplina: string = 'Programação para a Web I';

  protected theme = signal('white');

  protected labelTheme = signal('noite');

  protected toggle() {
    if(this.theme() === 'white') {
      this.labelTheme.set('dia');
      this.theme.set('dark');

      return;
    }

    this.labelTheme.set('noite');
    this.theme.set('white');
  }
}
