const texto = `
Lista Telefônica:
- (11) 98754-1212
- 9348-0392 
- (85)2319-24902
- (21) 4219-03910
`

console.log('Exemplo1')
console.log(texto.match(/\(?\d{0,2}\)?\s?\d{4,5}-\d{4}/g))
/*
Exemplo1
[ '(11) 98754-1212',
  ' 9348-0392',
  '(85)2319-2490',
  '(21) 4219-0391' ]
*/