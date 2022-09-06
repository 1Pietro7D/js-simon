console.log("hello world");

// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// const greenBtn = document.querySelector(".top-left");
// const redBtn = document.querySelector(".top-right");
// const blueBtn = document.querySelector(".bottom-left");
// const yellowBtn = document.querySelector(".bottom-right");

// centerBtn.addEventListener("click", function () {
//   console.log("mi hai cliccato center");
// });

// greenBtn.addEventListener("click", function () {
//   console.log("mi hai cliccato green");
// });

// redBtn.addEventListener("click", function () {
//   console.log("mi hai cliccato red");
// });

// blueBtn.addEventListener("click", function () {
//   console.log("mi hai cliccato blue");
// });

// yellowBtn.addEventListener("click", function () {
//   console.log("mi hai cliccato yellow");
// });

const cellBtn = document.querySelectorAll(".cell");
const startBtn = document.querySelector(".center");
let myArray = [];
let userArray = [];
let winArray = [];
let loseArray = [];
let userErrors = [];
let userAnswer;

startBtn.addEventListener("click", startGame);

function startGame() {
  myArray = [];
  userArray = [];
  winArray = [];
  loseArray = [];
  userErrors = [];
  cellBtn.forEach((value) => {
    const randomNum = getRandomNumber(1, 29);
    value.innerHTML = randomNum;
    myArray.push(randomNum);
  });
  setTimeout(() => {
    cellBtn.forEach((value) => {
      getResetHTML(value);
    });
  }, 5000);
  setTimeout(() => {
    getPromptSwitch(myArray, userArray);
  }, 6000);
  setTimeout(() => {
    console.log(myArray);
    console.log(userArray);
    alert("sto calcolando");
  }, 6200);
  setTimeout(() => {
    alert("cambia computer, è lento... cmq finalmente ho il tuo confronto");
  }, 6200 + 1);
  setTimeout(() => {
    getConfrontArray(myArray, userArray, winArray, loseArray, userErrors);
  }, 6300);
}
