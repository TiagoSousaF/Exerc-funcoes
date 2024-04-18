//Exercício 1 - Faça uma função que recebe um valor inteiro e verifica se o valor é par. A função deve retornar 1 se o número for par e 0 se for ímpar.//
//Tiago Daniel de Sousa Filho//
console.clear();
var teclado = require("prompt-sync")();
function verificador(num) {
    var res = num % 2;
    var retorno = 0;
    if (res == 0) {
        return res + 1;
        console.log("O n\u00FAmero ".concat(num, " \u00E9 par(").concat(retorno, ")!"));
    }
    else if (res == 1) {
        return res - 1;
        console.log("O n\u00FAmero ".concat(num, " \u00E9 \u00EDmpar(").concat(retorno, ")!"));
    }
    else {
        console.log("Algo deu errado!");
    }
    return 0;
}
console.log("Verificador de par(1) ou \u00EDmpar(0)");
var num = parseInt(teclado("Digite aqui o n\u00FAmero a ser verificado: "));
var numero = verificador(num);
