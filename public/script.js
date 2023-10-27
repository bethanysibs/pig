"use strict";

//get random number
let rolls = 6; //

function roll() {
  let secretNumber = Math.trunc(Math.random() * rolls) + 1;
  console.log(secretNumber);

  if (secretNumber == 6) {
    document.getElementById("dice").src = "img/dice-6.png";
  } else if (secretNumber == 5) {
    document.getElementById("dice").src = "img/dice-5.png";
  } else if (secretNumber == 4) {
    document.getElementById("dice").src = "img/dice-4.png";
  } else if (secretNumber == 3) {
    document.getElementById("dice").src = "img/dice-3.png";
  } else if (secretNumber == 2) {
    document.getElementById("dice").src = "img/dice-2.png";
  } else {
    document.getElementById("dice").src = "img/dice-1.png";
    console.log("You lose!");
  }
}
