let simbolo1: symbol = Symbol("pi");
let simbolo2: symbol = Symbol("pi");

// console.log(simbolo1 === simbolo2);

let nomes: (string|undefined)[] = ["Francisco", "Maria", undefined];
let nomesUsandoArray: Array<string|undefined> = ["Francisco", "Maria", undefined];

/*
const PI: unknown = 3.1416;
if(typeof PI === 'number')
    console.log( PI.toFixed(2) );
else
    console.log('Não é number');
*/

const CURSO: unknown = 10; // const CURSO: string = 'TSI';

// console.log( (CURSO as string).toLowerCase() );

// let tipoVoid: null = undefined;

// console.log( tipoVoid );

type Shape = 'circle' | 'square' | 'triangle';

let formaGeometrica: Shape;

formaGeometrica = 'circle';

function getArea(shape: Shape): number {
  switch (shape) {
    case 'circle':
      return Math.PI * 2;
    case 'square':
      return 10 * 2;
    case 'triangle':
      return 10 * 5;
    default:
      // TypeScript knows this should never happen
      const checagemInvalida: never = shape;
      return checagemInvalida;
  }
}

type WorkList = 'to-do' | 'doing' | 'done' | 'backlog';

function loopInfinito(): never {
  let flag: number = 1;
  while (true) {
    if(flag === 10) throw new Error('Erro lançado!');
  }


}

let algumValor: unknown = "100";

/*
if(typeof algumValor === 'string')
    console.log( algumValor.length );
*/

console.log( (algumValor as string).length );

function saudacao(nome?: string, mail?: string): string {
  return `Olá, ${nome || 'visitante'}!`;
}

console.log( saudacao('João') );

// Object x object x { }
let alunoObject: Object = 10;
let alunoTSI: object = alunoObject;
let alunoPWEB1: { } = {
  nome: "Maria",
  email: "maria@gmail.com"
}

let aluno: { nome: string; email: string };
aluno = {
  nome: "Maria",
  email: "maria@gmail.com"
}

alunoPWEB1 = { ...aluno };
alunoPWEB1 = aluno;

/*
function saudacao(nome?: string, email: string): string {
  return `Olá, ${nome || 'visitante'}!`;
}
*/

let codigo: 200 | 404 | 500 | "teste";
codigo = 200;
console.log(codigo);
// codigo = 200;

type ID = string | number | { id: string };
const id: ID = { id: '123' };

console.log( `${typeof id}` );

interface Pessoa {
  nome: string;
  idade: number;
  saudacao(): void;
}

let pessoa: Pessoa = {
  nome: "Francisco",
  idade: 40,
  saudacao: () => console.log("=> Olá")
}

pessoa.saudacao();