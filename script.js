'use strict';
let maxScore = prompt("Enter the max score to get the winner: ");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");
const current0 = document.querySelector("#current--0");
const current1 = document.querySelector("#current--1");
const newGame = document.querySelector(".btn--new");
const hold = document.querySelector(".btn--hold");
const roll = document.querySelector(".btn--roll");
const dice = document.querySelector(".dice");

// Scores for player 1 and 2 "score1 - score2"
let scores = [0, 0];
let current = 0;
let active = 0;
let stillRunning = true;

function checkRandom(num) {
    if (num === 1) {
        changePlayer();
    } else {
        current += num;
        document.querySelector(`#current--${active}`).textContent = current;
    }
}

function changePlayer() {
    current = 0;
    document.querySelector(`#current--${active}`).textContent = current;
    active = active === 1 ? 0 : 1;
    player0.classList.toggle("player--active");
    player1.classList.toggle("player--active");
}



newGame.addEventListener("click", () => {
    score0.textContent = "0";
    score1.textContent = "0";
    current0.textContent = "0";
    current1.textContent = "0";
    stillRunning = true;
    scores = [0, 0];
    current = 0;
    active = 0;
    dice.classList.add("hidden");
    player0.classList.remove("player--winner");
    player1.classList.remove("player--winner");
    player0.classList.add("player--active");
    player1.classList.remove("player--active");
    maxScore = prompt("Enter the max score to get the winner: ");
})

hold.addEventListener("click", () => {
    if (stillRunning) {
        scores[active] += current;
        document.querySelector(`#score--${active}`).textContent = scores[active];
        if (scores[active] >= maxScore) {
            stillRunning = false;
            dice.classList.add("hidden");
            document.querySelector(`.player--${active}`).classList.add("player--winner");
            document.querySelector(`.player--${active}`).classList.remove("player--active");
        } else {
            changePlayer();
        }
    }

})

roll.addEventListener("click", () => {
    if (stillRunning) {
        const random = Math.floor(Math.random() * 6) + 1;
        dice.classList.remove("hidden");
        dice.src = `dice-${random}.png`;
        checkRandom(random);
    }
})