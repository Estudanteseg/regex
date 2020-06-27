const texto1='áéíóú àèìòù âêîôû ç ãõ ü'

console.log( "Resultado1:")
console.log(texto1.match(/[À-ü]/g))
/*
Resultado1:
[ 'á',
  'é',
  'í',
  'ó',
  'ú',
  'à',
  'è',
  'ì',
  'ò',
  'ù',
  'â',
  'ê',
  'î',
  'ô',
  'û',
  'ç',
  'ã',
  'õ',
  'ü' ]
*/