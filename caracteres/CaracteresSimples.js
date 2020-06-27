const texto = '1,2,3,4,5,6,a.b c!d?e'

const regexVirgula = /,/

console.log("Exemplo1:")
console.log(texto.split(regexVirgula))
/*
Exemplo1:
[ '1', '2', '3', '4', '5', '6', 'a.b c!d?e' ]

A cada vírgula gerou um elemento no array
*/

console.log("Exemplo2:")
console.log(texto.match(regexVirgula))
/*
Exemplo2:
[ ',',
  index: 1,
  input: '1,2,3,4,5,6,a.b c!d?e',
  groups: undefined ]

Encontrou a vírgula no índice 1
*/

console.log("Exemplo3:")
console.log(texto.match(/,/g))
/*
Exemplo3:
[ ',', ',', ',', ',', ',', ',' ]

Encontrou todas as vírgulas
*/

console.log("Exemplo4:")
console.log(texto.match(/A/i))
/*
Exemplo4:
[ 'a',
  index: 12,
  input: '1,2,3,4,5,6,a.b c!d?e',
  groups: undefined ]

 Somente com a flag i no java script traz mais informações sobre a busca (maiúscula e minúscula) 
*/

console.log("Exemplo5:")
console.log(texto.match(/A/gi))
/*
Exemplo5:
[ 'a' ]
 Com as flags gi retorna somente que encontrou a letra buscada
*/