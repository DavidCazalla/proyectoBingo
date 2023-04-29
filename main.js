
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
let arrayBingoPlayer = []
let arrayBingoCpu = []
let arrayLinePlayer = []
let arrayLineTwoPlayer = []
let arrayLineThreePlayer = []
let arrayLineCpu = []
let arrayLineTwoCpu = []
let arrayLineThreeCpu = []
let arrayWinLinePlayer = []
let arrayWinLineTwoPlayer = []
let arrayWinLineThreePlayer = []
let arrayWinLineCpu = []
let arrayWinLineTwoCpu = []
let arrayWinLineThreeCpu = []
let contador = 0

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
    orderArrayCpu()
    return arrayCpu;
}
arrayCardsCpu();

// funcion que ordena de menor mayor los array de la cpu
function orderArrayCpu(){
    arrayCpu.sort(function (a, b) {
      return a - b;
    });
  }

// funcion que pinta los numeros del carton de la cpu en html
function introduceDivCpu() {
    let numberCpu = document.createElement("div");
    numberCpu.setAttribute("class", "numberCpu");
    for (let i = 0; i < 15; i++) {
      let divCpu = document.createElement("div");
      divCpu.setAttribute("class", "cpu");
      divCpu.textContent = arrayCpu[i];
      cartonCpu.append(numberCpu);
      numberCpu.append(divCpu);
    }
}
introduceDivCpu()

// funcion que con click tacha la el div del jugador 
let cell = document.querySelectorAll(".player")
function addClickableToCartonPlayer() {
    cell = document.querySelectorAll(".player")
    cell.forEach((e) => {
      e.addEventListener("click", () => {
        e.classList.add("eliminate");
        if (arrayBingoPlayer.includes(e)) {
        } else {
          arrayBingoPlayer.push(e);
        }
        winBingoPlayer();
      });
    });
}
addClickableToCartonPlayer()

// funcion que tacha automaticamente el div cpu
let cells = document.querySelectorAll(".cpu")
function eliminateCpu() {
  cells = document.querySelectorAll(".cpu")
  for (let i = 0; i < arrayHistory.length; i++) {
    for (let a = 0; a < cells.length; a++) {
      if (arrayHistory[i] == cells[a].textContent) {
        cells[a].classList.add("eliminate");
        if (arrayBingoCpu.includes(cells[a])) {
        } else {
          arrayBingoCpu.push(cells[a]);
        }
      }
    }
  }
  winBingoCpu();
}

// funcion que jugador gana el bingo
function winBingoPlayer() {
    if (arrayBingoPlayer.length === 15) {
      alert("BINGO!!! EL JUGADOR A GANADO");
    }
}

// funcion  que cpu gana el bingo
function winBingoCpu() {
    if (arrayBingoCpu.length === 15) {
      alert("BINGO!!! LA MAQUINA A GANADO");
    }
}

// crear el h3 para que salga cuando se canta linea
let h3 = document.createElement("h3");
h3.setAttribute("class", "line");

// funcion para crear el array con la primera liena del jugador
function fivePlayer() {
    for (let a = 0; a < cell.length; a++) {
      for (let i = 0; i < 5; i++) {
        arrayLinePlayer.push(cell[i]);
      }
      return arrayLinePlayer;
    }
}

// funcion de click para tachar la linea uno del player
let lineOnePlayer
function addClickLinePlayer(){
  lineOnePlayer = fivePlayer()
  arrayLinePlayer.forEach((e) => {
    e.addEventListener("click", () => {
      e.classList.add("eliminate");
      if (arrayWinLinePlayer.includes(e)) {
      } else {
        arrayWinLinePlayer.push(e);
      }
      //winLinePlayer()
    });
  });
}
addClickLinePlayer()

// funcion player para introducir lo div tachados en un arraylineuno
function winLinePlayer() {
    if (arrayWinLinePlayer.length === 5) {
      contador++
      //linePlayer()
    }
}