const texto = "Lista de Arquivos mp3: jazz.mp3,rock.mp3,podcast.mp3,blues.mp3"

//Desafio trazer a quantidade de arquivos .mp3 da lista
console.log("Desafio1: " + texto.match(/\.mp3/g).length)
/* Desafio1: 4 */


//Desafio trazer o array com os arquivos .mp3
console.log("Desafio2: " + texto.match(/\w+\.mp3/g))
/* Desafio2: jazz.mp3,rock.mp3,podcast.mp3,blues.mp3 */