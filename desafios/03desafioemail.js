const texto = `
Os emails dos convidados são:
-fulano@cod3r.com.br
-xico@gmail.com
-cicrano@teste.com.br
-beltrano@yahoo.com
-maria_silva@registro.br
-rafa.sampaio@hotmail.com.br
-joao@cnn.com
`

console.log('Exemplo1')
console.log(texto.match(/\w+@\w+\.\w{2,4}/g))
/*
Exemplo1
[ 'fulano@cod3r.com',
  'xico@gmail.com',
  'cicrano@teste.com',
  'beltrano@yahoo.com',
  'maria_silva@registro.br',
  'sampaio@hotmail.com',
  'joao@cnn.com' ]

*/

console.log('Exemplo2')
console.log(texto.match(/[\w.]+@[\w.]+\.\w{2,4}/g))
/*
Exemplo2
[ 'fulano@cod3r.com.br',
  'xico@gmail.com',
  'cicrano@teste.com.br',
  'beltrano@yahoo.com',
  'maria_silva@registro.br',
  'rafa.sampaio@hotmail.com.br',
  'joao@cnn.com' ]

*/
