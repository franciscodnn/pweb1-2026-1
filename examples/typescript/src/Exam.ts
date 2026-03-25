import { Weight, Answer } from './Weight';

class Exam {
    private weight: Weight; // pesos das questões da prova
    private officialAnswer: Answer; // respostas do gabarito

    // respostas dos estudantes
    private studentsAnswer: Answer[]; 

    constructor(
        weight: Weight,
        answer: Answer
    ) {
        this.weight = weight;
        this.officialAnswer = answer;
        this.studentsAnswer = Array<Answer>();
    }

    public add(studentAnswer: Answer): void {
        this.studentsAnswer.push(studentAnswer);
    }

    public avg(): number {

        if(this.studentsAnswer.length === 0) 
            throw Error('Não há respostas cadastradas');

        let total: number = 0;

        const gabarito = this.officialAnswer.respostas;

        // percorrer todas as respostas
        const todasNotas: number[] = this.studentsAnswer.map(
            (answer) => this.mapAnswerToGrade(answer)
        );

        total = todasNotas.reduce(
            (acumulador, valorCorrente) => acumulador + valorCorrente,
            0
        );

        return Number((total / this.studentsAnswer.length).toFixed(2));
    }

    private mapAnswerToGrade(answer: Answer): number {
        let nota = 0;

        nota = answer.respostas.reduce(
            (acumulado, resposta, index): number => {
                if(resposta === this.officialAnswer.respostas[index]) {
                    return acumulado + (this.weight.pesos[index] ?? 0);
                    // return acumulado + (this.weight.pesos[index]!);
                }
                return acumulado;
            }, 0);

        // for(let i = 0; i < gabarito.length; i++) {
        //     if(respostaAluno[i] === gabarito[i]) {
        //         nota += this.weight.pesos[i];
        //     }
        // }

        return nota;
    }
}

const pesos: Weight = new Weight([2, 4, 4]);
const gabarito: Answer = new Answer("gabarito", ['a', 'b', 'e']);

const aluno1: Answer = new Answer("João", ['a', 'b', 'd']);
const aluno2: Answer = new Answer("Arthur", ['a', 'b', 'e']);
const aluno3: Answer = new Answer("Maria", ['a', 'b', 'd']);

const examePWeb1: Exam = new Exam(pesos, gabarito);
examePWeb1.add(aluno1);
examePWeb1.add(aluno2);
examePWeb1.add(aluno3);

console.log( examePWeb1.avg() );