// no início...
// um byte (8bits) - 256 caracteres
// Símbolos, Pontuação, A-Z, a-z, 0-9

// Dois bytes (16 bits) - 65500+ caracteres

// Unicode: https://unicode-table.com/pt/
// Quantidade de Bytes variável - Expansível
// Suporta +1 milhão caracteres
// Atualmente +100000 caracteres atribuídos.

const texto = 'aʬc௵d'

console.log("Exemplo1:")
console.log(texto.match(/\u02AC|\u0BF5/g))
/*
Exemplo1:
[ 'ʬ', '௵' ]
*/