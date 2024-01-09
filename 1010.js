function isBooleanNum(numA, numB){
    if ((numA > 0 && numB > 0) || (numA < 0 && numB < 0)){
        return true;
    }
    else{
        return false;
    }
}

console.log(isBooleanNum(-9, 3));