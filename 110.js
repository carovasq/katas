// Lea dos números y devuelva el mayor.
function higherOfTwo(A, B){
    if (A > B){
        console.log("El numero mayor es: " + A)
    }
    if (B > A){
        console.log("El numero mayor es: " + B)
    }
    else if (A == B){
        console.log("Son iguales, cari.")
    }
}
let numA = 9;
let numB = 3;

higherOfTwo(numA, numB);


// Otras formas de hacerlo...
// function higherOfTwo(){
//     let numA = 5;
//     let numB = 5;
//     if (numA > numB){
//         console.log("El numero mayor es: " + numA)
//     }
//     if (numB > numA){
//         console.log("El numero mayor es: " + numB)
//     }
//     else if (numA == numB){
//         console.log("Son iguales.")
//     }
// }

// higherOfTwo();



// function higherOfTwo(numA, numB){
//     // let numA = 5;
//     // let numB = 5;
//     if (numA > numB){
//         console.log("El numero mayor es: " + numA)
//     }
//     if (numB > numA){
//         console.log("El numero mayor es: " + numB)
//     }
//     else if (numA == numB){
//         console.log("Son iguales.")
//     }
// }

// higherOfTwo(8, 2);