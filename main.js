
let container = document.querySelector(".container")
let containerBalls = document.querySelector(".containerBalls")
let cartonPlayer = document.querySelector(".cartonPlayer")
let cartonCpu = document.querySelector(".cartonCpu")
let cartons = document.querySelector(".cartons")
let comments = document.querySelector(".comments")
const button = document.getElementById("button")
const clean = document.getElementById("clean")

let numRandom
let balls
let arrayPlayer = []
let arrayHistory = []
let cardPlayer = []
let arrayCpu = []
let cardCpu = []

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
    orderArrayPlayer()
    return arrayPlayer;
}
arrayCardsPlayer();

// funcion para ordenar los numeros del carton del jugador de menor a mayor
function orderArrayPlayer(){
    arrayPlayer.sort(function (a, b) {
      return a - b;
    });
}

// funcion que introducir los numeros aleatorios del player en el div html
function introduceDivPlayer() {
    let numberplayer = document.createElement("div");
    numberplayer.setAttribute("class", "numberPlayer");
    for (let i = 0; i < 15; i++) {
      let divPlayer = document.createElement("div");
      divPlayer.setAttribute("class", "player");
      divPlayer.textContent = arrayPlayer[i];
      cartonPlayer.append(numberplayer);
      numberplayer.append(divPlayer);
    }
}
introduceDivPlayer()

// funcion que crea los 15 numeros aleatorios de la cpu
function arrayCardsCpu() {
    for (let i = 0; i < 15; i++) {
      random = getnumberRandom();
      if (!arrayCpu.includes(random)) {
        arrayCpu.push(random);
      } else {
        i--;
      }
    }
    
    return arrayCpu;
}
arrayCardsCpu();

// Funcion que ordena de menor mayor los array de la cpu
function orderArrayCpu(){
    arrayCpu.sort(function (a, b) {
      return a - b;
    });
  }