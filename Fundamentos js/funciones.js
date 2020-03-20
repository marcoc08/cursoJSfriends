//Funciones
//JS FEO
function suma(num1, num2){
    return num1+num2; //cuando el compilador ve un return
                        //el codigo se para
}

//JS BONITO
const suma2 = (num1, num2) => {
    return `El resultado de la suma ${num1 + num2}` ;
}

console.log(suma2(2, 5))