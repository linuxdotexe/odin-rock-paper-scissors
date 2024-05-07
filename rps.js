let humanScore = 0;
let computerScore = 0;

for (let i = 0; i < 5; i++) {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
}

function getHumanChoice() {
  let humanChoice = prompt("Enter your choice: ", "rock");
  return humanChoice.toLowerCase();
}

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock") {
    if (computerChoice === "rock") {
      console.log("It's a tie.");
    } else if (computerChoice === "paper") {
      console.log("You lose! Paper beats Rock!");
      computerScore += 1;
    } else {
      console.log("You win! Rock beats Scissors!");
      humanScore += 1;
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      console.log("You win! Paper beats Rock!");
      humanScore += 1;
    } else if (computerChoice === "paper") {
      console.log("It's a tie.");
    } else {
      console.log("You lose! Paper beats Scissors!");
      computerScore += 1;
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "rock") {
      console.log("You lose! Rock beats Scissors!");
      computerScore += 1;
    } else if (computerChoice === "paper") {
      console.log("You win! Scissors beats Paper!");
      humanScore += 1;
    } else {
      console.log("It's a tie.");
    }
  } else {
    console.log("Invalid input :(");
  }
}

console.log("Your score: " + humanScore);
console.log(humanScore > computerScore ? console.log("You win.") : "You lose.");
