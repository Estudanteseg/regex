// . ? * + - ^$ | [] {} () \ :

const texto = '1,2,3,4,5,6,a.b c!d?e'

console.log("Exemplo1:")
const regexPonto = /\./g
console.log(texto.split(regexPonto))
/*
Exemplo1:
[ '1,2,3,4,5,6,a', 'b c!d?e' ]

Localizou o ponto "." no texto e quebrou a expressão no ponto encontrado, ficando com 2 espressões:
'1,2,3,4,5,6,a' 
'b c!d?e'
*/

console.log("Exemplo2:")
const regexSimbolos = /,|\.|\?|!| /g
console.log(texto.split(regexSimbolos))
/*
Exemplo2:
[ '1', '2', '3', '4', '5', '6', 'a', 'b', 'c', 'd', 'e' ]

Ao encontrar vírgula "," ou ponto "." ou interrogação "?" ou exclamação "!" ou espaço " ", 
quebrou em elementos do array 

*/