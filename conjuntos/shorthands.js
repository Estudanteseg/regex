const texto1 = `1,2,3,4,5,6,a.b c!d?e	-
f_g`

//\d retorna dígitos
console.log( "Resultado1:")
console.log(texto1.match(/\d/g))
/*
Resultado1:
[ '1', '2', '3', '4', '5', '6' ]

*/


//\D retorna não números
console.log( "Resultado2:")
const texto2 = '1) casa 2) grama 3) bola de futebol 4) esporte 5) óculos 6) chuveiro'
console.log(texto2.match(/\d\)\D+/g))
/*
Resultado2:
[ '1) casa ',
  '2) grama ',
  '3) bola de futebol ',
  '4) esporte ',
  '5) óculos ',
  '6) chuveiro' ]
*/

//\w retorna caracteres [a-zA-Z0-9_]
console.log( "Resultado3:")
console.log(texto1.match(/\w/g))
/*
Resultado3:
[ '1', '2', '3', '4', '5', '6', 'a', 'b', 'c', 'd', 'e', 'f', '_', 'g' ]


*/


//\w retorna tudo que não são caracteres
console.log( "Resultado4:")
console.log(texto1.match(/\W/g))
/*
Resultado4:
[ ',', ',', ',', ',', ',', ',', '.', ' ', '!', '?', '\t', '-', '\n' ]
*/

//\s retorna espaços
console.log( "Resultado5:")
console.log(texto1.match(/\s/g))
/*
Resultado5:
[ ' ', '\t', '\n' ]
*/


//\S retorna não espaços
console.log( "Resultado6:")
console.log(texto1.match(/\S/g))
/*
Resultado6:
[ '1',
  ',',
  '2',
  ',',
  '3',
  ',',
  '4',
  ',',
  '5',
  ',',
  '6',
  ',',
  'a',
  '.',
  'b',
  'c',
  '!',
  'd',
  '?',
  'e',
  '-',
  'f',
  '_',
  'g' ]

*/
