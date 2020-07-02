const texto = 'O João recebeu 120 milhões apostando 6 9 21 23 45 46.'

// para definir uma quantificador usa {}

console.log('Exemplo1:')
console.log(texto.match(/\d{1,2}/g))
/*
Exemplo1:
[ '12', '0', '6', '9', '21', '23', '45', '46' ]
*/

console.log('Exemplo2:')
console.log(texto.match(/\d{2}/g))
/*
Retorna números que tenham 2 dígitos.
Exemplo2:
[ '12', '21', '23', '45', '46' ]
*/


console.log('Exemplo3:')
console.log(texto.match(/\d{1,}/g))
/*
Retorna números que tenham 2 dígitos.
Exemplo3:
[ '120', '6', '9', '21', '23', '45', '46' ]
*/

console.log('Exemplo4:')
console.log(texto.match(/\w{7}/g))
/*
Retorna palavras que contenham 7 dígitos.
Exemplo4:
[ 'recebeu', 'apostan' ]
*/



console.log('Exemplo5:')
console.log(texto.match(/[\wáéíóúãẽĩõũâêîôûãẽĩõũ]{7,}/g))
/*
Retorna palavras que contenham 7 ou mais letras com ou sem acento.
Exemplo5:
[ 'recebeu', 'milhões', 'apostando' ]
*/


console.log('Exemplo6:')
console.log(texto.match(/\b[\wáéíóúãẽĩõũâêîôûãẽĩõũ]{7}\b/g))
/*
Retorna palavras que contenham 7 letrascom ou sem acento.
Exemplo6:
[ 'recebeu', 'milhões' ]

*/

