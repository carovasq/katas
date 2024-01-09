// Lea dos números y devuelva "Verdadero" si uno es Negativo y el otro Positivo. En caso contrario, que devuelva "Falso".
function isBooleanNum(numA, numB){
    if ((numA > 0 && numB < 0) || (numA < 0 && numB > 0)){
        return true;
    }
    else{
        return false;
    }
}

console.log(isBooleanNum(-9, 3));