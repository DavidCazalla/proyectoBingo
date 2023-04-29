let arrayHistory = []
let numRandom

//  funcion para sacar numero aleatorio
function getnumberRandom() {
    const min = 1;
    const max = 90;
    return min + Math.floor(Math.random() * max);
}

// funcion para añadir en un array el numero aleatorio sin que se repita 
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

// funcion para crear div que salga en html el historial del numero random
function visualArrayHistory() {
    for (let i = 0; i < 1; i++) {
      balls = document.createElement("div");
      balls.setAttribute("class", "balls");
      balls.textContent = numRandom;
      containerBalls.append(balls);
    }
  }
