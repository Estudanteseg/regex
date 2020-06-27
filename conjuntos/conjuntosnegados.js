const texto1 = '1,2,3,4,5,6,a.b c!d?e[f'


console.log( "Resultado1:")
console.log(texto1.match(/[^0-9]/g))
/*
Resultado1:
[ ',',
  ',',
  ',',
  ',',
  ',',
  ',',
  'a',
  '.',
  'b',
  ' ',
  'c',
  '!',
  'd',
  '?',
  'e',
  '[',
  'f' ]

*/

console.log( "Resultado2:")
console.log(texto1.match(/[^\d!\?\[\s,\.]/g))
/*
Resultado2:
[ 'a', 'b', 'c', 'd', 'e', 'f' ]
*/



const texto2 = '1: !"#$%&\'()*+,-./2: :;<=>?@'


// Remove do ! até o / e do : até o @. Também retira os espaços
console.log( "Resultado3:")
console.log(texto2.match(/[^!-/:-@\s]/g))
/*
Resultado3:
[ '1', '2' ]
*/


