class Answer {
    // private nome: string;
    // private respostas: string[];
    constructor(_nome, _respostas) {
        this._nome = _nome;
        this._respostas = _respostas;
        this._respostas = this._respostas || [];
    }
    get respostas() {
        return this._respostas;
    }
}
class Weight {
    // private pesos: number[];
    constructor(_pesos) {
        this._pesos = _pesos;
        this._pesos = this._pesos || [];
    }
    get pesos() {
        return this._pesos;
    }
}
export { Weight, Answer };
/*
const tipoProva1: Weight = new Weight([2, 4, 1, 1, 2]);
const tipoProva2: Weight = new Weight([4, 1, 2, 1, 2]);

const respostaAluno1: Answer = new Answer("Francisco",
    ['a', 'b','a', 'b', 'd']);
*/ 
