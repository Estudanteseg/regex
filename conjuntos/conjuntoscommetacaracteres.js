//não precisa de escape na maioria dos conjuntos
// necessário escape em algumas situações - [  ] ^

const texto1 = '.$+*?-'

console.log( "Resultado1:")
console.log(texto1.match(/[.$+*?-]/g))
/*
Resultado1:
[ '.', '$', '+', '*', '?', '-' ]
*/


console.log( "Resultado2:")
console.log(texto1.match(/[.$]/g))
/*
Resultado2:
[ '.', '$' ]
*/


console.log( "Resultado3:")
console.log(texto1.match(/[+.?*$]./g))
/*
Resultado3:
[ '.$', '+*', '?-' ]
*/

console.log( "Resultado4:")
console.log(texto1.match(/[$-?]/g))
/*
Resultado4:
[ '.', '$', '+', '*', '?', '-' ]
*/


console.log( "Resultado5:")
console.log(texto1.match(/[$\-?]/g))
/*
Resultado5:
[ '$', '?', '-' ]
*/

console.log( "Resultado6:")
console.log(texto1.match(/[-$]/g))
/*
Resultado6:
[ '$', '-' ]
*/