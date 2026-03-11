type OperacaoMatematica = (x: number, y: number) => number;

const adicao: OperacaoMatematica = (a, b) => a + b;
const subtracao: OperacaoMatematica = (a, b) => a - b;

console.log( adicao(5, 10) );

// ------
function saudacao(nome: string, titulo?: string): string {
  if (titulo) {
    return `Olá, titulo ${titulo} ${nome}!`;
  }
  return `Olá, ${nome}!`;
}

console.log( `=> ${saudacao("Maria", "")}` );

function somarTodos(...numeros: number[]): number {
  return numeros.reduce((total, n) => total + n, 0);
}

console.log( somarTodos(1, 2) );
console.log( somarTodos(1, 2, 3, 4, 5) );
console.log( somarTodos(1) );


function converter(valor: string): number;
function converter(valor: number): string;
function converter(valor: string | number): number | string {
  if (typeof valor === "string") {
    return parseFloat(valor);
  } else {
    return valor;
  }
}

console.log( `=> ${ converter(10) }`);

function somar(op1: number): number;
// function somar(op1: number, op2: number): number;
function somar(op1: number, op2: number, op3: number): number;
function somar(op1: number, op2?: number, op3?: number): number {
    if(op2 !== undefined && op3 !== undefined)
        return op1 + op2 + op3;

    return op1;
}

console.log( somar(1) );
// console.log( somar(1, 3) ); // Erro!
