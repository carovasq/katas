// Lea dos números y devuelva "Verdadero" si los dos son Positivos ó los dos son Negativos. En caso contrario, que devuelva "Falso".
function isBooleanNum(numA, numB){
    if ((numA > 0 && numB > 0) || (numA < 0 && numB < 0)){
        return true;
    }
    else{
        return false;
    }
}

console.log(isBooleanNum(-9, 3));