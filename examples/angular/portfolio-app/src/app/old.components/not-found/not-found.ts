import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <section class="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center bg-slate-100 dark:bg-slate-900">

      <span class="text-8xl font-extrabold text-indigo-600 dark:text-indigo-400 leading-none">
        404
      </span>

      <h1 class="mt-4 text-2xl font-bold text-slate-800 dark:text-white">
        Página não encontrada
      </h1>

      <p class="mt-2 text-slate-500 dark:text-slate-400 max-w-md">
        A página que você está procurando não existe ou foi movida para outro endereço.
      </p>

      <a
        routerLink="/"
        class="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
      >
        ← Voltar para o início
      </a>

    </section>
  `
})
export class NotFound {}
