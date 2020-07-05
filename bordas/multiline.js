const texto1 = `
Leo é muito legal
Emanuel foi jogar em Sergipe
Bianca é casada com Habib
`

console.log( "Exemplo1:")
console.log(texto1.match(/\n/g))
/*
Exemplo1:
[ '\n', '\n', '\n', '\n' ]
*/

console.log( "Exemplo2:")
console.log(texto1.match(/^(\w).+/gim))
/* 
Exemplo2:
[ 'Leo é muito legal',
  'Emanuel foi jogar em Sergipe',
  'Bianca é casada com Habib' ]
*/