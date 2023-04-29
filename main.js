
let container = document.querySelector(".container")
let containerBalls = document.querySelector(".containerBalls")

let arrayPlayer = []
let arrayHistory = []
let numRandom
let balls
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

// funcion para crear los 15 numeros del jugador aleatorios
function arrayCardsPlayer() {
    for (let i = 0; i < 15; i++) {
      random = getnumberRandom();
      if (!arrayPlayer.includes(random)) {
        arrayPlayer.push(random);
      } else {
        i--;
      }
    }
    return arrayPlayer;
}
arrayCardsPlayer();

// funcion para ordenar los numeros del carton del jugador de menor a mayor
function orderArrayPlayer(){
    arrayPlayer.sort(function (a, b) {
      return a - b;
    });
}
