import { Weight, Answer } from './Weight.js';
class Exam {
    constructor(weight, answer) {
        this.weight = weight;
        this.officialAnswer = answer;
        this.studentsAnswer = Array();
    }
    add(studentAnswer) {
        this.studentsAnswer.push(studentAnswer);
    }
    avg() {
        if (this.studentsAnswer.length === 0)
            throw Error('Não há respostas cadastradas');
        let total = 0;
        const gabarito = this.officialAnswer.respostas;
        // percorrer todas as respostas
        const todasNotas = this.studentsAnswer.map((answer) => this.mapAnswerToGrade(answer));
        total = todasNotas.reduce((acumulador, valorCorrente) => acumulador + valorCorrente, 0);
        return Number((total / this.studentsAnswer.length).toFixed(2));
    }
    mapAnswerToGrade(answer) {
        let nota = 0;
        nota = answer.respostas.reduce((acumulado, resposta, index) => {
            var _a;
            if (resposta === this.officialAnswer.respostas[index]) {
                return acumulado + ((_a = this.weight.pesos[index]) !== null && _a !== void 0 ? _a : 0);
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
const pesos = new Weight([2, 4, 4]);
const gabarito = new Answer("gabarito", ['a', 'b', 'e']);
const aluno1 = new Answer("João", ['a', 'b', 'd']);
const aluno2 = new Answer("Arthur", ['a', 'b', 'e']);
const aluno3 = new Answer("Maria", ['a', 'b', 'd']);
const examePWeb1 = new Exam(pesos, gabarito);
examePWeb1.add(aluno1);
examePWeb1.add(aluno2);
examePWeb1.add(aluno3);
console.log(examePWeb1.avg());
