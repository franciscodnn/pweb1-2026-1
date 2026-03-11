let simbolo1 = Symbol("pi");
let simbolo2 = Symbol("pi");
// console.log(simbolo1 === simbolo2);
let nomes = ["Francisco", "Maria", undefined];
let nomesUsandoArray = ["Francisco", "Maria", undefined];
/*
const PI: unknown = 3.1416;
if(typeof PI === 'number')
    console.log( PI.toFixed(2) );
else
    console.log('Não é number');
*/
const CURSO = 10; // const CURSO: string = 'TSI';
let formaGeometrica;
formaGeometrica = 'circle';
function getArea(shape) {
    switch (shape) {
        case 'circle':
            return Math.PI * 2;
        case 'square':
            return 10 * 2;
        case 'triangle':
            return 10 * 5;
        default:
            // TypeScript knows this should never happen
            const checagemInvalida = shape;
            return checagemInvalida;
    }
}
function loopInfinito() {
    let flag = 1;
    while (true) {
        if (flag === 10)
            throw new Error('Erro lançado!');
    }
}
let algumValor = "100";
/*
if(typeof algumValor === 'string')
    console.log( algumValor.length );
*/
console.log(algumValor.length);
function saudacao(nome, mail) {
    return `Olá, ${nome || 'visitante'}!`;
}
console.log(saudacao('João'));
// Object x object x { }
let alunoObject = 10;
let alunoTSI = alunoObject;
let alunoPWEB1 = {
    nome: "Maria",
    email: "maria@gmail.com"
};
let aluno;
aluno = {
    nome: "Maria",
    email: "maria@gmail.com"
};
alunoPWEB1 = Object.assign({}, aluno);
alunoPWEB1 = aluno;
/*
function saudacao(nome?: string, email: string): string {
  return `Olá, ${nome || 'visitante'}!`;
}
*/
let codigo;
codigo = 200;
console.log(codigo);
const id = { id: '123' };
console.log(`${typeof id}`);
let pessoa = {
    nome: "Francisco",
    idade: 40,
    saudacao: () => console.log("=> Olá")
};
pessoa.saudacao();
export {};
