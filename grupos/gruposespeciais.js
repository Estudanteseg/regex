const texto1 = 'João é calmo, mas no trânsito fica nervoso.'

console.log('Exemplo1')
console.log(texto1.match(/[\wÀ-Ú]+/gi))
/*
Exemplo1
[ 'João', 'é', 'calmo', 'mas', 'no', 'trânsito', 'fica', 'nervoso' ]
*/

console.log('Exemplo2')
console.log(texto1.match(/[\wÀ-Ú]+,/gi))
/*
Exemplo2
[ 'calmo,' ]
*/

console.log('Exemplo3')
console.log(texto1.match(/[\wÀ-Ú]+(?=,)/gi))
/*
Exemplo3
[ 'calmo' ]
*/

console.log('Exemplo4')
console.log(texto1.match(/[\wÀ-Ú]+(?=\.)/gi))
/*
Exemplo4
[ 'nervoso' ]
*/