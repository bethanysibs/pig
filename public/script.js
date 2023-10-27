"use strict";

//get random number
let rolls = 6; //

function roll() {
  let diceNumber = Math.trunc(Math.random() * rolls) + 1;
  console.log(diceNumber);

  if (diceNumber == 6) {
    document.getElementById("dice").src = "img/dice-6.png";
  } else if (diceNumber == 5) {
    document.getElementById("dice").src = "img/dice-5.png";
  } else if (diceNumber == 4) {
    document.getElementById("dice").src = "img/dice-4.png";
  } else if (diceNumber == 3) {
    document.getElementById("dice").src = "img/dice-3.png";
  } else if (diceNumber == 2) {
    document.getElementById("dice").src = "img/dice-2.png";
  } else {
    document.getElementById("dice").src = "img/dice-1.png";
    console.log("You lose!");

    //if player 0 is active remove active class and add active class to player 1
    //if player 1 is active remove active class and add active class to player 0
    let player0 = document.querySelector("player--0");
    let player1 = document.querySelector("player--1");

    player0.classList.remove("player--active");
    player1.classList.add("player--active");
  }
}
