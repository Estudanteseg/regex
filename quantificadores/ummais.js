const texto1='De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'
const texto2='There is a big fog in NYC'

// + - uma ou mais
const regex= /fogo+/gi

console.log ('Exemplo1')
console.log (texto1.match(regex))
/*
Exemplo1
[ 'fogo', 'FOGOOOOOO' ]
*/

console.log ('Exemplo2')
console.log (texto2.match(regex))
/*
Exemplo2
null
*/


const texto3 = "Os números: 0123456789."

console.log ('Exemplo3')
console.log (texto3.match(/[0-9]/g))
/*
Exemplo3
[ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ]

*/

console.log ('Exemplo4')
console.log (texto3.match(/[\d]/g))
/*
Exemplo4
[ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ]

*/


console.log ('Exemplo5')
console.log (texto3.match(/[0-9]+/g))
/*
Exemplo5
[ '0123456789' ]
*/

console.log ('Exemplo6')
console.log (texto3.match(/\d+/g))
/*
Exemplo6
[ '0123456789' ]
*/
