// g (global) - global
// i (insensitive)- ignore case

const texto = 'Carlos assinou o abaixo-assinado.'

console.log("\n\nExemplo1: ")
console.log(texto.match(/C|ab/)) 

/* 
Procura a letra C ou ab
retornou:
Exemplo1: 
[ 'C',
  index: 0,
  input: 'Carlos assinou o abaixo-assinado.',
  groups: undefined ]
  */

 console.log("\n\nExemplo2: ")
 console.log(texto.match(/c|ab/i))  
/* 
Procura a letra c ou C ou ab ou Ab ou aB ou AB. Agora com a flag i
retornou:
Exemplo2: 
[ 'C',
  index: 0,
  input: 'Carlos assinou o abaixo-assinado.',
  groups: undefined ]
  */


 console.log("\n\nExemplo3: ")
 console.log(texto.match(/c|ab/)) 
 /* 
 Procura a letra c ou ab. Sem a flag i
 retornou:
Exemplo3: 
[ 'ab',
  index: 17,
  input: 'Carlos assinou o abaixo-assinado.',
  groups: undefined ]
*/

console.log("\n\nExemplo4: ")
console.log(texto.match(/ab|c/gi)) 
/* 
Procura a letra ab ou c, maiúsculas ou minúsculas, todas as expressões. Com as flags g e i
retornou:
Exemplo4: 
[ 'C', 'ab' ]
*/