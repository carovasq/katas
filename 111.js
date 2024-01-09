function foundHigher(numA, numB, numC){
    let higher = numA;
    if (numB > higher){
        higher = numB;
    }
    if (numC > higher){
        higher = numC;
    }
    return higher;
}

let resultHigher = foundHigher(9, 3, 6);

console.log("El mayor de los tres números es: " + resultHigher);

