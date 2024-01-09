function higherOfTwo(){
    let numA = 5;
    let numB = 5;
    if (numA > numB){
        console.log("El numero mayor es: " + numA)
    }
    if (numB > numA){
        console.log("El numero mayor es: " + numB)
    }
    else if (numA == numB){
        console.log("Son iguales.")
    }
}

higherOfTwo();