//Exercício 2 - Crie uma função que receba 3 números como parâmetro e retorne o MENOR dentre eles.//
//Tiago Daniel de Sousa Filho//

console.clear();

const teclado = require(`prompt-sync`)();

function ranqueDecr (num1:number, num2:number, num3:number):number{
    if(num1 < num2 && num1 < num3){
        return num1
    } else if(num2 < num1 && num2 < num3){
        return num2;
    } else if(num3 < num1 && num3 < num1){
        return num3;
    } else {
        return 0;
    }
}

let num1R: number = parseFloat(teclado(`Digite aqui o 1º número: `));
let num2R: number = parseFloat(teclado(`Digite aqui o 2º número: `));
let num3R: number = parseFloat(teclado(`Digite aqui o 3º número: `));

let menorNumero = ranqueDecr(num1R,num2R,num3R);

console.log(`Menor número: ${menorNumero}`);