// Lea 10 números y devuelva el mayor.
// NOTA. La propiedad `.length` se utiliza para medir la longitud total de la variable/argumento.
function foundHigher(){
    let higher = arguments[0];
    let i = 1;

    while (i < arguments.length){
        if (arguments[i] > higher){
            higher = arguments[i];
        }
        i++;
    }
    return higher;
}

console.log("El mayor de los tres números es: " + foundHigher(0, 1, 2, 30, 4, 5, 6, 7, 8, 9));