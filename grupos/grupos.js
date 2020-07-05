const texto1 = 'O José Simão é muito engraçado... hehehehehe'

console.log('Exemplo1')
console.log(texto1.match(/(he)/g))
/*
Exemplo1
[ 'he', 'he', 'he', 'he', 'he' ]
*/

console.log('Exemplo2')
console.log(texto1.match(/(he)+/g))
/*
Exemplo2
[ 'hehehehehe' ]
*/

const texto2 = 'http://site.info www.escola.ninja.br google.com.ag'
console.log('Exemplo3')
console.log(texto2.match(/(http:\/\/)?(www\.)?\w+.\w{2,}(\.\w{2})?/g))
/*
Exemplo3
[ 'http://site.info', 'www.escola.ninja.br', 'google.com.ag' ]
*/


const texto3 = 'O rato do reino dos ratos roeu a roupa do rei de Roma em Roraima ou Rondonia'
console.log('Exemplo4')
console.log(texto3.match(/(ra|ro|re)\w+/gi))
/*
Exemplo4
[ 'rato',
  'reino',
  'ratos',
  'roeu',
  'roupa',
  'rei',
  'Roma',
  'Roraima',
  'Rondonia' ]
*/

