// Estoy haciendo uso de Template literal para incluir los valores de los 2 Parámetros de Entrada: console.log(`${argumento1}`)

function isEqualName(nameA, nameB){
    if (nameA == nameB){
        console.log(`${nameA} y ${nameB} son iguales, cari.`);
    }
    else{
        console.log("NO son iguales :(");
    }
}

isEqualName("Carito", "Carito");