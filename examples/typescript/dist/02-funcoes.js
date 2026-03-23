const adicao = (a, b) => a + b;
const subtracao = (a, b) => a - b;
console.log(adicao(5, 10));
// ------
function saudacao(nome, titulo) {
    if (titulo) {
        return `Olá, titulo ${titulo} ${nome}!`;
    }
    return `Olá, ${nome}!`;
}
console.log(`=> ${saudacao("Maria", "")}`);
function somarTodos(...numeros) {
    return numeros.reduce((total, n) => total + n, 0);
}
console.log(somarTodos(1, 2));
console.log(somarTodos(1, 2, 3, 4, 5));
console.log(somarTodos(1));
function converter(valor) {
    if (typeof valor === "string") {
        return parseFloat(valor);
    }
    else {
        return valor;
    }
}
console.log(`=> ${converter(10)}`);
function somar(op1, op2, op3) {
    if (op2 !== undefined && op3 !== undefined)
        return op1 + op2 + op3;
    return op1;
}
console.log(somar(1));
// console.log( somar(1, 3) ); // Erro!
function buscarUsuario() {
    return { id: 1, nome: "João" };
}
const user = {
    id: 10,
    nome: "Francisco"
};
const formatarMaiusculo = (s) => s.toUpperCase();
// formatarMaiusculo.formato = "MAIÚSCULO";
const nomes = ["Alice", "Bob", "Charlie"];
// TypeScript infere que 'nome' é string
nomes.forEach(nome => {
    if (typeof nome === 'string')
        console.log(nome.toUpperCase());
    // console.log( (nome as string).toUpperCase() );
});
export {};
