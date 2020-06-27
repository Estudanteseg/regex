const texto1 = '1,2,3,4,5,6,a.b c!d?e[f'


console.log( "Resultado1:")
console.log(texto1.match(/[a-z]/g))
/*
Resultado1:
[ 'a', 'b', 'c', 'd', 'e', 'f' ]
*/

console.log( "Resultado2:")
console.log(texto1.match(/[b-d]/g))
/*
Resultado2:
[ 'b', 'c', 'd' ]
*/

console.log( "Resultado3:")
console.log(texto1.match(/[2-4]/g))
/*
Resultado3:
[ '2', '3', '4' ]
*/

console.log( "Resultado4:")
console.log(texto1.match(/[A-Z1-3]/gi))
/*
Resultado4:
[ '1', '2', '3', 'a', 'b', 'c', 'd', 'e', 'f' ]
*/