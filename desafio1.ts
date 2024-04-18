//Desafio 1 - Crie uma função que liste todos os números primos até 1000.Número primo é aquele que é divisível somente por 1 e por ele mesmo.//
//Tiago Daniel de Sousa Filho//

console.clear();

const teclado = require (`prompt-sync`)()

function primos(num, divisor = 2) {
    if (num <= 1){
        return false;
    }
    if (divisor === num) {
        return true;
    }
    if (num % divisor === 0) {
        return false;
    }
    return primos(num, divisor + 1);
}

function imprimirPrimo(esseNum, atual:number = 2) {
    if (atual > esseNum) {
        return;
    }
    if (primos(atual)) {
        console.log(atual);
    }
    imprimirPrimo(esseNum, atual + 1);
}

let esseNum: number = parseFloat (teclado(`Digite até o numero primo que deseja: `));
imprimirPrimo(esseNum);