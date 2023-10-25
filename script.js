function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  }
  
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return "You Win! " + capitalize(playerSelection) + " beats " + capitalize(computerSelection);
  } else {
    return "You Lose! " + capitalize(computerSelection) + " beats " + capitalize(playerSelection);
  }
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i , 5; i++) {
        const playerSelection = prompt("Enter your choice: Rock, Paper, or Scissors");
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        console.log(result)

        if (result.includes("Win")) {
            playerScore++;
        }   else if (result.includes("Lose")) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log("You win the game!");
    }   else if (playerScore < computerScore) {
        console.log("You lose the game!");
    }   else {
        console.log("It's a tie game!");
    }
}