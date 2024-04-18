//Exercício 3 - Crie uma função que recebe por parâmetro o raio de uma esfera e calcula o seu volume (v = 4/3*P*R^3).//
//Tiago Daniel de Sousa Filho//
console.clear();
var teclado = require("prompt-sync")();
function volume(raio) {
    var pi = 3.14;
    var volume = (4 / 3) * pi * (raio * raio * raio);
    return volume;
}
var raioR = parseFloat(teclado("Digite aqui o raio da esfera em metros: "));
var volumeR = volume(raioR);
console.log("O volume da esfera de raio ".concat(raioR, ", \u00E9 ").concat(volumeR, " metros c\u00FAbicos!"));
