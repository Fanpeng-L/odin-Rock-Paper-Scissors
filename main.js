// const choices = ["rock", "paper", "scissors"];

// function getComputerChoice() {
//   return choices[Math.floor(Math.random() * choices.length)];
// }

// function getPlayerChoice() {
//   let validatedInput = false;
//   while (validatedInput === false) {
//     const choice = prompt("Enter your choice: ");
//     if (choice === null) continue;
//     const choiceInLower = choice.toLowerCase();
//     if (choices.includes(choiceInLower)) {
//       validatedInput = true;
//       return choiceInLower;
//     }
//   }
// }

// function checkWinner(playerSelection, computerSelection) {
//   if (playerSelection === computerSelection) {
//     return "Tie";
//   } else if (
//     (playerSelection === "rock" && computerSelection === "scissors") ||
//     (playerSelection === "scissors" && computerSelection === "paper") ||
//     (playerSelection === "paper" && computerSelection === "rock")
//   ) {
//     return "player wins";
//   } else return "computer wins";
// }
// function playRound(playerSelection, computerSelection) {
//   const result = checkWinner(playerSelection, computerSelection);
//   console.log(
//     `You choose: ${playerSelection}, computer choose: ${computerSelection}`
//   );
//   if (result === "Tie") {
//     return "it's a tie";
//   } else if (result === "player wins") {
//     return `You win. ${playerSelection} beats ${computerSelection}`;
//   }
//   return `You lose. ${computerSelection} beats ${playerSelection}`;
// }

// function gamePlay() {
//   console.log("Welcome!");
//   for (let i = 0; i < 5; i++) {
//     const playerSelection = getPlayerChoice();
//     const computerSelection = getComputerChoice();
//   }
// }

// gamePlay();
