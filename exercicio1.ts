//Exercício 1 - Faça uma função que recebe um valor inteiro e verifica se o valor é par. A função deve retornar 1 se o número for par e 0 se for ímpar.//
//Tiago Daniel de Sousa Filho//

console.clear();

const teclado = require(`prompt-sync`)();

function verificador (num: number): number{
    let res: number = num % 2;
    let retorno: number = 0;
    if(res == 0){
        retorno = res + 1;
        console.log(`O número ${num} é par(${retorno})!`);
    } else if(res == 1){
        retorno = res - 1;
        console.log(`O número ${num} é ímpar(${retorno})!`);
    } else {
        console.log(`Algo deu errado!`);
    }

   return retorno; 
}

console.log(`Verificador de par(1) ou ímpar(0)`);
let num: number = parseInt(teclado(`Digite aqui o número a ser verificado: `));

verificador(num);