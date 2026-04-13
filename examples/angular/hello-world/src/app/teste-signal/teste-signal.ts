import { Component, signal, computed, WritableSignal, Signal } from '@angular/core';

@Component({
  selector: 'teste-signal',
  imports: [],
  templateUrl: './teste-signal.html',
  styleUrl: './teste-signal.css',
})
export class TesteSignal {
  private _estoque: WritableSignal<string> = signal('Notebook, Celular, Monitor');

  protected estoque: Signal<string> = this._estoque.asReadonly();

  protected quantidade = signal(0);
  protected dobroQuantidade = computed( 
    () => this.quantidade() * 2)
    ;

  adicionarItem(item: string) {
    // this._estoque.set(`${this.estoque()}, ${item}`);
    this.quantidade.update(qtd => qtd + 1);
  }

  removerItem() {
    this.quantidade.update(qtd => qtd - 1);
  }
}
