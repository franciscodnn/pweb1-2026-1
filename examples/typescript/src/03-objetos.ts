interface Formatavel<T> {
  formato(): string;

  new (tipo: string): T;
}

class Documento {
    conteudo: string = "content";
    constructor(tipo: string){

    }
}

/*
// verificar uso e correção de código

class DocumentoPDF extends Documento implements Formatavel<Documento> {
  
  constructor(tipo: string) {
    super(tipo);
  }
  // constructor(private conteudo: string) {}
  
  formato(): string {
    return this.conteudo.toUpperCase();
  }
}
*/

interface Docente {
    nome: string;
}

// .....

interface Docente {
    disciplinas: string[];
}

const docente: Docente = {
    nome: "Francisco",
    disciplinas: ["PWebI", "PW2", "Estatística"]
}

type DocenteType = {
    nome: string;
}

type DocenteDisciplinasType = 
    DocenteType & { disciplinas: string[]};

interface Dicionario {
  [chave: number]: string;
}

const cores: Dicionario = {
  0: "#FF0000",
  1: "#00FF00",
  2: "#0000FF"
};

console.log( cores[0] );




interface Opcoes {
  largura: number;
  altura: number;
}

// Erro: objeto literal não pode ter propriedades extras
const config: Opcoes = {
  largura: 100,
  altura: 200,
  cor: "vermelho"  // Erro: propriedade não existe em Opcoes
} as Opcoes;

// const configOpcoes: Opcoes = config;

function processarPessoa( pessoa: { nome: string; idade: number }) {
  console.log(`${pessoa.nome} tem ${pessoa.idade} anos`);
}

function processarPessoaDesestruturacao(
    {nome, idade}: { nome: string; idade: number}){
    console.log(`${nome} e idade ${idade}`);
}

processarPessoa({ nome: "Ana", idade: 28 });