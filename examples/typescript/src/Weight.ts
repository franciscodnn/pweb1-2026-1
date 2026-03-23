export class Answer {
    // private nome: string;
    // private respostas: string[];

    constructor(
        private nome: string,
        private respostas: string[]
    ) {

    }
}

class Weight {
    private pesos: number[];

    constructor(vetorPesos: number[]) {
        this.pesos = vetorPesos;
    }


}

const tipoProva1: Weight = new Weight([2, 4, 1, 1, 2]);
const tipoProva2: Weight = new Weight([4, 1, 2, 1, 2]);

const respostaAluno1: Answer = new Answer("Francisco", 
    ['a', 'b','a', 'b', 'd']);