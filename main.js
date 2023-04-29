let arrayHistory = []
let numRandom

//  Creacion de funcion para sacar numero aleatorio
function getnumberRandom() {
    const min = 1;
    const max = 90;
    return min + Math.floor(Math.random() * max);
}

// Creacion de funcion para añadir en un array el numero aleatorio sin que se repita 
function numberRandomUnique() {
    numRandom = getnumberRandom(); 
    if (!arrayHistory.includes(numRandom)) {
      arrayHistory.push(numRandom);
    } else {
      numberRandomUnique(arrayHistory);
    }
    console.log(arrayHistory)
    return numRandom;
}

