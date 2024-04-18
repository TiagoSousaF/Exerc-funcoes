//Exercício 2 - Crie uma função que receba 3 números como parâmetro e retorne o MENOR dentre eles.//
//Tiago Daniel de Sousa Filho//
console.clear();
var teclado = require("prompt-sync")();
function ranqueDecr(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        return num1;
    }
    else if (num2 < num1 && num2 < num3) {
        return num2;
    }
    else if (num3 < num1 && num3 < num1) {
        return num3;
    }
    else {
        return 0;
    }
}
var num1R = parseFloat(teclado("Digite aqui o 1\u00BA n\u00FAmero: "));
var num2R = parseFloat(teclado("Digite aqui o 2\u00BA n\u00FAmero: "));
var num3R = parseFloat(teclado("Digite aqui o 3\u00BA n\u00FAmero: "));
var menorNumero = ranqueDecr(num1R, num2R, num3R);
console.log("Menor n\u00FAmero: ".concat(menorNumero));
