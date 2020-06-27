const texto1 = 'ABC [abc] a-c 1234'

console.log( "Resultado1:")
console.log(texto1.match(/[a-c]/g))
/*
Resultado1:
[ 'a', 'b', 'c', 'a', 'c' ]
*/

console.log( "Resultado2:")
console.log(texto1.match(/a-c/g))
/*
Resultado2:
[ 'a-c' ]
*/

console.log( "Resultado3:")
console.log(texto1.match(/[A-z]/g))
/*
Resultado3:
[ 'A', 'B', 'C', '[', 'a', 'b', 'c', ']', 'a', 'c' ]

Intervalos usam a ordem da tabela UNICODE (ASCII) simbolos entre "Z" e "a": [ \ |  - `
*/

console.log( "Resultado4:")
console.log(texto1.match(/[a-Z]/g))
/*
Resultado4:
console.log(texto1.match(/[a-Z]/g))
                   ^

SyntaxError: Invalid regular expression: /[a-Z]/: Range out of order in character class
    at Object.<anonymous> (/regex/regex/conjuntos/intervaloscuidados.js:27:20)
    at Module._compile (internal/modules/cjs/loader.js:778:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:831:12)
    at startup (internal/bootstrap/node.js:283:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:623:3)
Range fora de ordem colocar "a" a "Z"... diferente de colocar de "A" a "z" que é a ordem correta
*/

console.log( "Resultado5:")
console.log(texto1.match(/[A-Za-z]/g))
/*
Resultado5:
[ 'A', 'B', 'C', 'a', 'b', 'c', 'a', 'c' ]
*/
