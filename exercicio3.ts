//Exercício 3 - Crie uma função que recebe por parâmetro o raio de uma esfera e calcula o seu volume (v = 4/3*P*R^3).//
//Tiago Daniel de Sousa Filho//

console.clear();

const teclado = require(`prompt-sync`)();

function volume(raio:number): number{
    const pi: number = 3.14
    const volume = (4 / 3) * pi * (raio * raio * raio);
    return volume;
}

let raioR: number = parseFloat(teclado(`Digite aqui o raio da esfera em metros: `));

let volumeR: number = volume(raioR);

console.log(`O volume da esfera de raio ${raioR}, é ${volumeR} metros cúbicos!`);