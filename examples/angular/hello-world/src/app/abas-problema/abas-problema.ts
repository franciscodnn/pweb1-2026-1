import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-abas-problema',
  standalone: true,
  template: `
    <div class="p-4 max-w-sm space-y-3">
      <div class="flex gap-2">
        @for (aba of abas(); track aba) {
          <button (click)="selectedTab.set(aba)"
            class="bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium py-1 px-3 rounded">
            {{ aba }}
          </button>
        }
      </div>
      <p class="text-gray-700">Aba ativa: <span class="font-semibold">{{ selectedTab() }}</span></p>
      <button (click)="trocarAbas()"
        class="bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-medium py-1 px-3 rounded">
        Trocar conjunto de abas
      </button>
      <p class="text-red-600 text-sm font-medium">
        ⚠ Após trocar as abas, selectedTab ainda mostra "{{ selectedTab() }}"
        que pode não existir mais!
      </p>
    </div>
  `,
})
export class AbasProblemaComponent {
  abas = signal(['Início', 'Perfil', 'Config']);

  // ❌ selectedTab pode ficar inválido se abas mudar!
  selectedTab = linkedSignal(() => this.abas()[0]);

  trocarAbas() {
    this.abas.set(['Dashboard', 'Relatórios', 'Usuários', 'Início']);
    // selectedTab ainda vale 'Início', que não existe mais!
  }
}