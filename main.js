
//let container = document.querySelector(".container")
console.log("hola")
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

// funcion boton para sacar los numeros del bombo
button.addEventListener("click", () => {
    numberRandomUnique();
    visualArrayHistory();
});

// funcion boton reset
// Hacer que funcione el boton de reiniciar
clean.addEventListener("click", () => {
  arrayBingoPlayer = []
  arrayBingoCpu = []
  arrayPlayer = []
  arrayCpu = []
  arrayCardsPlayer()
  arrayCardsCpu()
  arrayHistory = []
  containerBalls.replaceChildren()
  cartonCpu.replaceChildren()
  cartonPlayer.replaceChildren()
  comments.innerHTML = ''
  arrayWinLinePlayer = []
  arrayWinLineTwoPlayer = []
  arrayWinLineThreePlayer = []
  arrayLineCpu = []
  arrayLineTwoCpu = []
  arrayLineThreeCpu = []
  arrayWinLineCpu = []
  arrayWinLineTwoCpu = []
  arrayWinLineThreeCpu = []
  contador = 0

})

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
      eliminateCpu()
      eliminateLineCpu()
      eliminateLineTwoCpu()
      eliminateLineThreeCpu()
    } else {
      numberRandomUnique(arrayHistory);
    }
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
      winLinePlayer()
    });
  });
}
addClickLinePlayer()

// funcion player para introducir lo div tachados en un arraylineuno
function winLinePlayer() {
    if (arrayWinLinePlayer.length === 5) {
      contador++
      linePlayer()
    }
}

// funcion para coger las 5 segundas lienas de la linea 2 player
function fiveTwoPlayer() {
    for (let a = 0; a < cell.length; a++) {
      for (let i = 5; i < 10; i++) {
        arrayLineTwoPlayer.push(cell[i]);
      }
      return arrayLineTwoPlayer;
    }
}

// funcion click para eliminar la linea 2
let lineTwoPlayer
function addClickLineTwoPlayer(){
  lineTwoPlayer = fiveTwoPlayer()
  arrayLineTwoPlayer.forEach((e) => {
    e.addEventListener("click", () => {
      e.classList.add("eliminate");
      if (arrayWinLineTwoPlayer.includes(e)) {
      } else {
        arrayWinLineTwoPlayer.push(e);
      }
      winLineTwoPlayer()
    });
  });
}
addClickLineTwoPlayer()

// funcion para cantar la linea 2 de player
function winLineTwoPlayer() {
    if (arrayWinLineTwoPlayer.length === 5) {
      contador++
      linePlayer()
    }
}

// funcion para terner en un array los 5 ultimos numeros de la linea player
function FiveThreePlayer() {
    for (let a = 0; a < cell.length; a++) {
      for (let i = 10; i < 15; i++) {
        arrayLineThreePlayer.push(cell[i]);
      }
      return arrayLineThreePlayer;
    }
}

// funcion para tachar la ultima fila de la linea player
let lineThreePlayer
function addClickLineThreePlayer(){
    lineThreePlayer = FiveThreePlayer()
    arrayLineThreePlayer.forEach((e) => {
      e.addEventListener("click", () => {
        e.classList.add("eliminate")
        if (arrayWinLineThreePlayer.includes(e)) {
        } else {
          arrayWinLineThreePlayer.push(e);
        }
        winLineThreePlayer()
      })
    })
  }
addClickLineThreePlayer()

// funcion para cantar la linea 3 de player
function winLineThreePlayer() {
    if (arrayWinLineThreePlayer.length === 5) {
      contador++
      linePlayer()
    }
}

// funcion para que salga alerta de linea player
function linePlayer(){
    if(contador === 1){
      h3.textContent = "El jugador a cantado linea + 50 puntos";
      comments.append(h3);
    }
}

// funcion para coger los 5 primeros numeros para crear la liena 1 de la cpu
function fiveCpu() {
    for (let a = 0; a < cells.length; a++) {
      for (let i = 0; i < 5; i++) {
        arrayLineCpu.push(cells[i]);
      }
      return arrayLineCpu;
    }
}
fiveCpu()

// funcion de tachado automatico si el numero del bombo es igual al de la liena 1
let lineOneCpu
function eliminateLineCpu(){
  for (let i = 0; i < arrayHistory.length; i++) {
    for (let a = 0; a < arrayLineCpu.length; a++) {
      if (arrayHistory[i] == arrayLineCpu[a].textContent) {
        arrayLineCpu[a].classList.add("eliminate");
        if (arrayWinLineCpu.includes(arrayLineCpu[a])) {
          console.log(arrayWinLineCpu[a])
        } else {
          arrayWinLineCpu.push(arrayLineCpu[a]);
        }
        winLineCpu()
      }
    }
  }
}

// funcion para cantar linea 1 de la cpu
function winLineCpu() {
    if (arrayWinLineCpu.length === 5) {
      contador++
      lineCpu()
    }
}

// funcion para coger los 5 numeros de la linea 2 cpu
function FiveTwoCpu() {
    for (let a = 0; a < cells.length; a++) {
      for (let i = 5; i < 10; i++) {
        arrayLineTwoCpu.push(cells[i]);
      }
      return arrayLineTwoCpu;
    }
}
FiveTwoCpu()

// funcion de tachado automatico si el numero del bombo es igual al de la lina 2
function eliminateLineTwoCpu() {
    for (let i = 0; i < arrayHistory.length; i++) {
      for (let a = 0; a < arrayLineTwoCpu.length; a++) {
        if (arrayHistory[i] == arrayLineTwoCpu[a].textContent) {
          arrayLineTwoCpu[a].classList.add("eliminate");
          if (arrayWinLineTwoCpu.includes(arrayLineTwoCpu[a])) {
            console.log(arrayWinLineTwoCpu)
          } else {
            arrayWinLineTwoCpu.push(arrayLineTwoCpu[a]);
          }
          winLineTwoCpu()
        }
      }
    }
}

// funcion para contar la linea 2 de la cpu
function winLineTwoCpu() {
    if (arrayWinLineTwoCpu.length === 5) {
      contador++
      lineCpu()
    }
}

// funcion para sacar los 5 ultimos numeros de la linea 3
function FiveThreeCpu() {
    for (let a = 0; a < cells.length; a++) {
      for (let i = 10; i < 15; i++) {
        arrayLineThreeCpu.push(cells[i]);
      }
      return arrayLineThreeCpu;
    }
  }
FiveThreeCpu()

// funcion de tachado automatico si el numero de la linea 3 coincide con el bombo
function eliminateLineThreeCpu() {
    for (let i = 0; i < arrayHistory.length; i++) {
      for (let a = 0; a < arrayLineThreeCpu.length; a++) {
        if (arrayHistory[i] == arrayLineThreeCpu[a].textContent) {
          arrayLineThreeCpu[a].classList.add("eliminate");
          if (arrayWinLineThreeCpu.includes(arrayLineThreeCpu[a])) {
          } else {
            arrayWinLineThreeCpu.push(arrayLineThreeCpu[a]);
          }
          console.log(arrayWinLineThreeCpu, 'linea 3')
          winLineThreeCpu()
        }
      }
    }
}

// funcion de cantar linea 3 cpu
function winLineThreeCpu() {
    if (arrayWinLineThreeCpu.length === 5) {
      contador++
      lineCpu()
    }
}

// funcion de alerta linea cpu 3
function lineCpu(){
    if(contador === 1){
      h3.textContent = "La maquina ha cantado linea + 50  puntos";
      comments.append(h3);
    }
}