// Exemplo básico de uma classe
class Pessoa {
    /*
    nome: string;
    idade: number;
  
    constructor(nome: string, idade: number) {
      this.nome = nome;
      this.idade = idade;
    }
    */
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}
const pessoa = new Pessoa("Maria", 25);
console.log(pessoa.apresentar()); // Saída: Olá, meu nome é Maria e tenho 25 anos.
class Disciplina {
    constructor(titulo, cargaHoraria = Disciplina.INVALIDO) {
        this.titulo = titulo;
        this.cargaHoraria = cargaHoraria;
    }
}
Disciplina.INVALIDO = 999;
console.log(Disciplina.INVALIDO);
class Utilitarios {
    // Método estático
    static calcularAreaCirculo(raio) {
        return Utilitarios.PI * raio * raio;
    }
    // Método estático que usa outro membro estático
    static calcularCircunferenciaCirculo(raio) {
        return 2 * Utilitarios.PI * raio;
    }
    // Propriedade estática com getter
    static get versao() {
        return "1.0.0";
    }
}
// Propriedade estática
Utilitarios.PI = 3.14159;
console.log(Utilitarios.versao);
export {};
