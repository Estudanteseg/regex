const texto = '<div>Conteudo 01</div><div>Conteudo 02</div>'

console.log('Exemplo1')
console.log(texto.match(/<div>.+<\/div>/g))
/*
Exemplo1
[ '<div>Conteudo 01</div><div>Conteudo 02</div>' ]
*/

console.log('Exemplo2')
console.log(texto.match(/<div>.*<\/div>/g))
/*
Exemplo2
[ '<div>Conteudo 01</div><div>Conteudo 02</div>' ]
*/


console.log('Exemplo3')
console.log(texto.match(/<div>.{0,100}<\/div>/g))
/*
Exemplo3
[ '<div>Conteudo 01</div><div>Conteudo 02</div>' ]
*/


console.log('Exemplo4')
console.log(texto.match(/<div>.+?<\/div>/g))
/*
Exemplo4
[ '<div>Conteudo 01</div>', '<div>Conteudo 02</div>' ]
*/

console.log('Exemplo5')
console.log(texto.match(/<div>.*?<\/div>/g))
/*
Exemplo5
[ '<div>Conteudo 01</div>', '<div>Conteudo 02</div>' ]
*/


console.log('Exemplo6')
console.log(texto.match(/<div>.{0,100}?<\/div>/g))
/*
Exemplo6
[ '<div>Conteudo 01</div>', '<div>Conteudo 02</div>' ]
*/
