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

  constructor(
    public nome: string, 
    public idade: number) 
    {
    
  }

  apresentar(): string {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  }
}

const pessoa = new Pessoa("Maria", 25);
console.log(pessoa.apresentar()); // Saída: Olá, meu nome é Maria e tenho 25 anos.

class Disciplina {
    titulo: string;
    cargaHoraria: number;
    static INVALIDO: number = 999;

    constructor(titulo: string, 
        cargaHoraria: number = Disciplina.INVALIDO) {
        this.titulo = titulo;
        this.cargaHoraria = cargaHoraria;
    }
}

console.log(Disciplina.INVALIDO);

class Utilitarios {
  // Propriedade estática
  static readonly PI: number = 3.14159;
  
  // Método estático
  static calcularAreaCirculo(raio: number): number {
    return Utilitarios.PI * raio * raio;
  }
  
  // Método estático que usa outro membro estático
  static calcularCircunferenciaCirculo(raio: number): number {
    return 2 * Utilitarios.PI * raio;
  }
  
  // Propriedade estática com getter
  static get versao(): string {
    return "1.0.0";
  }
}

console.log( Utilitarios.versao );

// ----
class Veiculo {
  constructor(
    protected marca: string, 
    protected modelo: string, 
    protected ano: number
  ) {}
  
  descricao(): string {
    return `${this.marca} ${this.modelo} (${this.ano})`;
  }
  
  idade(anoAtual: number = new Date().getFullYear()): number {
    return anoAtual - this.ano;
  }
}

class Carro extends Veiculo {
  constructor(
    marca: string,
    modelo: string,
    ano: number,
    private numPortas: number
  ) {
    // Chama o construtor da classe pai
    super(marca, modelo, ano);
  }
  
  // Sobrescreve o método da classe pai
  descricao(): string {
    // Usa o método da classe pai com super
    return `${super.descricao()} - ${this.numPortas} portas`;
  }
  
  // Método específico desta subclasse
  abrirPortas(): string {
    return `Abrindo ${this.numPortas} portas`;
  }
}

class Moto extends Veiculo {
  constructor(
    marca: string,
    modelo: string,
    ano: number,
    private cilindradas: number
  ) {
    super(marca, modelo, ano);
  }
  
  descricao(): string {
    return `${super.descricao()} - ${this.cilindradas}cc`;
  }
}

const meuCarro = new Carro("Toyota", "Corolla", 2020, 4);
const minhaMoto = new Moto("Honda", "CB500", 2022, 500);

console.log(meuCarro.descricao()); // Saída: Toyota Corolla (2020) - 4 portas
console.log(minhaMoto.descricao()); // Saída: Honda CB500 (2022) - 500cc
console.log(meuCarro.idade()); // Saída: 5 (considerando 2025)
console.log(meuCarro.abrirPortas()); // Saída: Abrindo 4 portas

// -----
abstract class Forma {
  constructor(protected cor: string) {}
  
  // Método comum com implementação
  descricao(): string {
    return `Uma forma ${this.cor}`;
  }
  
  // Método abstrato que deve ser implementado pelas subclasses
  abstract calcularArea(): number;
  
  // Método abstrato com parâmetro
  abstract redimensionar(fator: number): void;
}

class Retangulo extends Forma {
  constructor(
    protected cor: string,
    private largura: number,
    private altura: number
  ) {
    super(cor);
  }
  
  calcularArea(): number {
    return this.largura * this.altura;
  }

  redimensionar(fator: number): void {
    this.largura *= fator;
    this.altura *= fator;
  }
  
  // Método adicional específico desta classe
  calcularPerimetro(): number {
    return 2 * (this.largura + this.altura);
  }
}

class Circulo extends Forma {
  constructor(
    protected cor: string,
    private raio: number
  ) {
    super(cor);
  }
  
  calcularArea(): number {
    return Math.PI * this.raio ** 2;
  }
  
  redimensionar(fator: number): void {
    this.raio *= fator;
  }
}

// const minhaForma = new Forma("verde"); // Erro: não pode instanciar classe abstrata
const meuRetangulo = new Retangulo("azul", 10, 5);
const meuCirculo = new Circulo("vermelho", 7);

console.log(meuRetangulo.descricao()); // Saída: Uma forma azul
console.log(meuRetangulo.calcularArea()); // Saída: 50
meuRetangulo.redimensionar(2);
console.log(meuRetangulo.calcularArea()); // Saída: 200

console.log(meuCirculo.descricao()); // Saída: Uma forma vermelho
console.log(meuCirculo.calcularArea().toFixed(2)); // Saída aproximada: 153.94

// ------
interface Printavel {
  imprimir(): string;
}

interface Salvavel {
  salvar(): void;
  recuperar(id: string): boolean;
}

class Documento implements Printavel, Salvavel {
  constructor(
    private titulo: string,
    private conteudo: string,
    private id?: string
  ) {}
  
  imprimir(): string {
    return `DOCUMENTO: ${this.titulo}\n${this.conteudo}`;
  }
  
  salvar(): void {
    this.id = `doc_${Date.now()}`;
    console.log(`Documento salvo com ID: ${this.id}`);
  }
  
  recuperar(id: string): boolean {
    console.log(`Tentando recuperar documento ${id}`);
    return id === this.id;
  }
}

class Foto implements Printavel {
  constructor(private url: string, private descricao: string) {}
  
  imprimir(): string {
    return `FOTO: ${this.descricao}\nURL: ${this.url}`;
  }
}

// Função que trabalha com qualquer objeto Printavel
function imprimirItem(item: Printavel): void {
  console.log(item.imprimir());
}

const documento: Printavel = new Documento("Relatório", "Conteúdo do relatório...");
const foto: Printavel = new Foto("https://exemplo.com/foto.jpg", "Paisagem");

const arrayPrintaveis: Printavel[] = [documento, foto];

arrayPrintaveis.forEach( (elem) => console.log(elem.imprimir()));

imprimirItem(documento); // Funciona porque Documento implementa Printavel
imprimirItem(foto); // Funciona porque Foto implementa Printavel

// documento.salvar();
// console.log(documento.recuperar("doc_12345")); // Provavelmente false