const texto1='De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'
const texto2='There is a big fog in NYC'

// * - zero ou mais
const regex= /fogo*/gi

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
[ 'fog' ]
*/
