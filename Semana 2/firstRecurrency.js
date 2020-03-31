//define una funcion que dado un string te regrese la primer letra que se repite
// Google exercise interview
'e s t e b a n'

const word = "esteban";

const word1 = word.split(''),
    saveword1 = {}; //tabla hash
//guardas llave valor
//const save = {}

let acum = 0;

for (let i = 0; i <= word1.length; i++) {
    if (word1[i] in saveword1) {
        return console.log(`Se repite primero la letra: ${word1[i]}`)
    }

    saveword1[word1[i]] = 0;
}

//console.log(acum)

//const word2 = word1.join('');