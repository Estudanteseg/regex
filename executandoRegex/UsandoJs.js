const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

console.log ('*****************    Metodos da RegExp    *****************')
const regexNove = RegExp('9')

console.log("\nExemplo1:")
console.log(regexNove.test(texto))
/*
Exemplo1:
true
*/

console.log("\nExemplo2:")
console.log(regexNove.exec(texto))
/*
Exemplo2:
[ '9',
  index: 18,
  input: '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f',
  groups: undefined ]
*/

console.log ('*****************    Metodos da string    *****************')
const regexLetras = /[a-f]/g

console.log("\nExemplo3:")
console.log(texto.match(regexLetras))
/*
Exemplo3:
[ 'a', 'b', 'c', 'd', 'e', 'f' ]
*/

console.log("\nExemplo4:")
console.log(texto.search(regexLetras)) //índice onde foi encontrado a primeira ocorrência
/*
Exemplo4:
20
*/


console.log("\nExemplo5:")
console.log(texto.replace(regexLetras,'Achei')) //onde encontrar a busca troca por achei
/*
Exemplo5:
0,1,2,3,4,5,6,7,8,9,Achei,Achei,Achei,Achei,Achei,Achei
*/


console.log("\nExemplo6:")
console.log(texto.split(regexLetras)) //quebra em array
/*
Exemplo6:
[ '0,1,2,3,4,5,6,7,8,9,', ',', ',', ',', ',', ',', '' ]
*/

