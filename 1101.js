// Lea tu nombre y devuelva "¡Hola tuNombre. Tu nombre tiene n carácteres." Donde n sea la cantidad de carácteres de tuNombre
function isEqualName(name){
    let n = name.length
    if (name !== null && name !== "") {
        console.log(`Hola ${name}. Tu nombre tiene ${n} carácteres.`);
    }
    else{
        console.log("Pon un nombre, mi ciela :(");
    }
}

isEqualName("Carito");