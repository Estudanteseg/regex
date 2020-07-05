const texto1 = "Romário era um excelente jogadosr\n, mas hoje é um político questionador."

const texto2 = 'O rato do reino dos ratos roeu a roupa do rei de Roma em Roraima ou Rondonia'


console.log( "Exemplo1:")
console.log(texto2.match(/r[\wÀ-Ú]+/gi))
/*
Resultado1:
null
*/