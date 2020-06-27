const texto1 = "Bom\tdia"
const texto2 = "Bom\ndia"

console.log("Ex1: " + texto1.match(/./gi)) //Ex1: B,o,m,	,d,i,a
console.log("Ex2: " +texto2.match(/./gi)) //Ex2: B,o,m,d,i,a

console.log("Ex3: " +texto1.match(/../gi)) //Ex3: Bo,m	,di
console.log("Ex4: " +texto2.match(/../gi)) //Ex4: Bo,di


console.log("Ex5: " +texto1.match(/..../gi)) //Ex5: Bom
console.log("Ex6: " +texto2.match(/..../gi)) //Ex6: null (/n não é caracter, logo não tem 4 caracteres em sequência)


