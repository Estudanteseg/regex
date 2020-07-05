const texto1 = '<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>'

console.log('Exemplo1')
console.log(texto1.match(/<(\w+)>/g))
/*
Exemplo1
[ '<b>', '<strong>', '<div>' ]
*/

console.log('Exemplo2')
console.log(texto1.match(/<(\w+)>.*<\/\1/g))
/*
Exemplo2
[ '<b>Destaque</b',
  '<strong>Forte</strong',
  '<div>Conteudo</div' ]
*/


const texto2 = 'O rato do reino dos ratos roeu a roupa do rei de Roma em Roraima ou Rondonia'
console.log('Exemplo3')
console.log(texto2.replace(/(rato)/gi,"pato"))
/*
Exemplo2
[ '<b>Destaque</b',
  '<strong>Forte</strong',
  '<div>Conteudo</div' ]
*/
