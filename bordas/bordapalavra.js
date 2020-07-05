const texto1 = 'dia diafragma radial bom_dia diatonico wikipedia media melodia'

console.log('Exemplo1')
console.log(texto1.match(/\bdia\w*/gi))
/*
Exemplo1
[ 'dia', 'diafragma', 'diatonico' ]
*/

console.log('Exemplo2')
console.log(texto1.match(/\w*dia\b/gi))
/*
Exemplo2
[ 'dia', 'bom_dia', 'wikipedia', 'media', 'melodia' ]
*/


//Com acentos deve ser diferente
const texto2 = 'dia diafragma, radial bom-dia diatônico wikipédia media melodia'
console.log('Exemplo3')
console.log(texto2.match(/(\S*)?dia(\S*)?/gi))
/*
Exemplo3
[ 'dia',
  'diafragma,',
  'radial',
  'bom-dia',
  'diatônico',
  'wikipédia',
  'media',
  'melodia' ]
*/
