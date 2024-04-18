//Desafio 1 - Crie uma função que liste todos os números primos até 1000.Número primo é aquele que é divisível somente por 1 e por ele mesmo.//
//Tiago Daniel de Sousa Filho//
console.clear();
var teclado = require("prompt-sync")();
function primos(num, divisor) {
    if (divisor === void 0) { divisor = 2; }
    if (num <= 1) {
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
function imprimirPrimo(esseNum, atual) {
    if (atual === void 0) { atual = 2; }
    if (atual > esseNum) {
        return;
    }
    if (primos(atual)) {
        console.log(atual);
    }
    imprimirPrimo(esseNum, atual + 1);
}
var esseNum = parseFloat(teclado("Digite at\u00E9 o numero primo que deseja: "));
imprimirPrimo(esseNum);
