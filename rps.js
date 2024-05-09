let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    playRound(btn.value, getComputerChoice());
  });
});

const resultDiv = document.querySelector("#results");
const humanScoreDisplay = document.createElement("p");
const computerScoreDisplay = document.createElement("p");
const verdict = document.createElement("h3");

function updateVerdict(currentWin) {
  if (humanScore < 5 && computerScore >= 5) {
    verdict.textContent = "You lose :( Start again!";
    humanScore = 0;
    computerScore = 0;
  } else if (humanScore >= 5) {
    verdict.textContent = "You WIN! Play again!";
    humanScore = 0;
    computerScore = 0;
  } else {
    if (currentWin === "computer") {
      verdict.textContent = "You lose this round!";
    } else if (currentWin === "human") {
      verdict.textContent = "You win this round!";
    } else if (currentWin === "tie") {
      verdict.textContent = "It's a tie.";
    }
  }
  updateScores();
  resultDiv.appendChild(verdict);
}

function updateScores() {
  humanScoreDisplay.textContent = "Your Score: " + humanScore;

  computerScoreDisplay.textContent = "Computer Score: " + computerScore;
  resultDiv.appendChild(humanScoreDisplay);
  resultDiv.appendChild(computerScoreDisplay);
}

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock") {
    if (computerChoice === "rock") {
      updateVerdict("tie");
    } else if (computerChoice === "paper") {
      computerScore += 1;
      updateVerdict("computer");
    } else {
      humanScore += 1;
      updateVerdict("human");
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      humanScore += 1;
      updateVerdict("human");
    } else if (computerChoice === "paper") {
      updateVerdict("tie");
    } else {
      computerScore += 1;
      updateVerdict("computer");
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "rock") {
      computerScore += 1;
      updateVerdict("computer");
    } else if (computerChoice === "paper") {
      humanScore += 1;
      updateVerdict("human");
    } else {
      updateVerdict("tie");
    }
  }
}
