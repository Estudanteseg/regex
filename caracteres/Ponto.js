// Ponto representa um coringa, válido apenas para uma posição.

const texto = '1,2,3,5,6,7,8,9,0'

console.log("Exemplo1:")
console.log(texto.match(/1.2/g))
/*
Exemplo1:
[ '1,2' ]
Como existe uma string entre o 1 e o 2 no caso a vírgula "," retorna a expressão.
*/

console.log("Exemplo2:")
console.log(texto.match(/1..2/g))
/*
Exemplo2:
null
Não encontrou nenhuma parte do texto com o 1 e 2 e entre eles há 2 caracteres
*/

console.log("Exemplo3:")
console.log(texto.match(/1..,/g))
/*
Exemplo3:
[ '1,2,' ]

Entre o ponto e a vírgula da posição 4 tem 2 caracateres...
*/

const notas = '8.3,7.1,8.8,10.0'

console.log("Exemplo4:")
console.log(notas.match(/8../g))
/*
Exemplo4:
[ '8.3', '8.8' ]

Retorna todas as notas onde há 8 (acrescido de 2 caracteres)
*/


console.log("Exemplo5:")
console.log(notas.match(/.\../g))
/*
Exemplo5:
[ '8.3', '7.1', '8.8', '0.0' ]

Retorna todos os elementos que tem algo + ponto (.) + algo
*/
