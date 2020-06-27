const texto = "Casa bonita e a casa amarela da esquina com a rua CASADOATOR CAsADO"

const myregex = /casa/gi

console.log("Exemplo1:")
console.log(texto.match(myregex))
/*
Exemplo1:
[ 'Casa', 'casa', 'CASA', 'CAsA' ]
*/

console.log("Exemplo2:")
console.log(texto.match(/ATOR/))
/*
Exemplo2:
[ 'ATOR',
  index: 56,
  input: 'Casa bonita e a casa amarela da esquina com a rua CASADOATOR CAsADO',
  groups: undefined ]
*/

const textoUmaLinha = 'Essa é uma string de uma linha'
console.log("Exemplo3:")
console.log(textoUmaLinha.match(/é/))
/*
Exemplo3:
[ 'é',
  index: 5,
  input: 'Essa é uma string de uma linha',
  groups: undefined ]
*/



const textoVariasLinhas = `
 Essa é a linha 1
 Essa é a linha 2
 Essa é a linha 3
 Separando com crase`

 console.log("Exemplo4:")
 console.log(textoVariasLinhas.match(/linha/))
 /*
 Exemplo4:
[ 'linha',
  index: 11,
  input: '\n Essa é a linha 1\n Essa é a linha 2\n Essa é a linha 3\n Separando com crase',
  groups: undefined ]
  */
 


