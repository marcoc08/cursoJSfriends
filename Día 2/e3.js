//sort == ordena

//si son números, ordena de mayor a menor
//si son letras ordena alfabeticamente
//sort es un método para arreglos

//const nombre1 = "marquito", nombre2 = "Armandito";
//const nombres = [nombre1, nombre2];

//console.log(nombres.sort());


//siguiente ejercicio

//const paragraph= "Anita lava la tina dentro de su casa con su mama que le ayuda a enjuagar las cosas para que estén limpias";

//const paragraph1 = paragraph.split('');

//let acum = 0;

//for(let i = 0; i<=paragraph1.length; i++){
//    if (paragraph1[i] === 'a' || paragraph1[i]=== 'A') {
//        acum+= 1

//    }
//}

//console.log(acum)

//siguiente ejercicio

//check if a word is a palyndrome
//anita lava la tina == true

const paragraph= "anita lava la tina";


const paragraph1 = paragraph.split('');

const paragraph2 = paragraph1.reverse();



const paragraph3 = paragraph2.join('');

if (paragraph.replace(/ /g, "") === paragraph3.replace(/ /g, "")){
console.log('es un palindromo')
    
}else{

console.log ('no es un palindromo')
}