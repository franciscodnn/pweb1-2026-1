import { Component, signal, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notas',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="p-4 max-w-md space-y-2">
      <h2 class="text-xl font-bold">Bloco de Notas</h2>
      <textarea [ngModel]="nota()" (ngModelChange)="nota.set($event)" rows="5"
        class="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none">
      </textarea>
      <p class="text-xs text-gray-400">💾 Salvo automaticamente</p>
    </div>
  `,
})
export class NotasComponent {
  nota = signal(localStorage.getItem('nota') ?? '');

  constructor() {
    effect(() => {
      // Executa sempre que nota() mudar
      localStorage.setItem('nota', this.nota());
    });
  }
}