const texto1 = '1,2,3,4,5,6,a.b c!d?e[f'

const regexPares1 = /02468/g
console.log( "Resultado1:")
console.log(texto1.match(regexPares1))
/*
Resultado1:
null
*/

const regexPares2 = /[02468]/g
console.log( "Resultado2:")
console.log(texto1.match(regexPares2))
/*
Resultado2:
[ '2', '4', '6' ]
*/


const texto2 = 'João não vai passear na moto'
const regexComESemAcento1 = /n[aã]/g
console.log( "Resultado3:")
console.log(texto2.match(regexComESemAcento1))
/*
Resultado3:
[ 'nã', 'na' ]
*/

const regexComESemAcento2 = /n[aã]./g
console.log( "Resultado4:")
console.log(texto2.match(regexComESemAcento2))
/*
Resultado4:
[ 'não', 'na ' ]
*/