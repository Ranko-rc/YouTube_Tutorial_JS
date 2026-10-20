const butonsEl = document.querySelectorAll("button");
const resultEl = document.getElementById("result");
const userScoreEl = document.getElementById("user_score");
const computerScoreEl = document.getElementById("computer_score");
const noteGameEl = document.getElementById("note-game");


butonsEl.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id, computerPlay());
        // console.log("vybral jsi :", button.id, "poč´tač vybral :", computerPlay());
    });
});


let userScore = 0;
let computerScore = 0;

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}



function playRound(userSelection, computerSelection) {
    if (userSelection === computerSelection) {
        resultEl.textContent = "It's a tie!";
        noteGameEl.innerHTML = `Tvá volba : <strong>${userSelection}</strong>   &nbsp;&nbsp    Počítač volba : <strong>${computerSelection}</strong>`;
    } else if (
        (userSelection === "rock" && computerSelection === "scissors") ||
        (userSelection === "paper" && computerSelection === "rock") ||
        (userSelection === "scissors" && computerSelection === "paper")
    ) {
        resultEl.textContent = "You Won!";
        noteGameEl.innerHTML = `Tvá volba : <strong>${userSelection}</strong>     &nbsp;&nbsp    Počítač volba : <strong>${computerSelection}</strong>`;
        userScoreEl.textContent = ++userScore;
    } else {
        resultEl.textContent = "You Lost!";
        noteGameEl.innerHTML = `Tvá volba : <strong>${userSelection}</strong>    &nbsp;&nbsp      Počítač volba : <strong>${computerSelection}</strong>`;
        computerScoreEl.textContent = ++computerScore;
    }
}