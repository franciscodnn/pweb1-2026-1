import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-busca',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="p-4 max-w-sm space-y-3">
      <input [ngModel]="busca()" (ngModelChange)="busca.set($event)" placeholder="Buscar produto..."
        class="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
      <p class="text-sm text-gray-500">{{ resultados().length }} resultado(s)</p>
      <ul class="divide-y divide-gray-200 border rounded">
        @for (item of resultados(); track item) {
          <li class="px-3 py-2 text-sm text-gray-800">{{ item }}</li>
        }
      </ul>
    </div>
  `,
})
export class BuscaComponent {
  busca = signal('');

  produtos = signal(['Notebook', 'Mouse', 'Teclado', 'Monitor', 'Headset']);

  resultados = computed(() =>
    this.produtos().filter(p =>
      p.toLowerCase().includes(this.busca().toLowerCase())
    )
  ); // Signal

  public teste() {
    // this.resultados.set(['123', 'abc']); // Não permitido!
  }
  
}