/*
// rps game by using the fuction concepts
// sub-fuctions declaration
const getPlayerChoice = () => {
  return prompt("Please enter rock, paper, scissors");
};

const formatPlayerChoice = (playerChoice) => {
  if (playerChoice || playerChoice === "") {
    return playerChoice.trim().toLowerCase();
  } else {
    return false;
  }
};

const decideNotToPlay = () => {
  alert("I guess you change your mind. Maybe next time.");
};

const evalutePlayerChoice = () => {
  if (
    playerChoice === "rock" ||
    playerChoice === "paper" ||
    playerChoice === "scissors"
  ) {
    return playerChoice;
  } else {
    return false;
  }
};

const invalidChoice = () => {
  alert("You didn't enter rock paper or scissors");
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  const rpsArray = ["rock", "paper", "scissors"];
  return rpsArray[randomNumber];
};

const determineWinner = () => {
  const winner =
    player === computer
      ? "Tie game"
      : player === "rock" && computer === "paper"
      ? "Player: ${player} \nComputer: ${computer} \nComputer wins"
      : player === "paper" && computer === "scissors"
      ? "Player: ${player} \nComputer: ${computer} \nComputer wins"
      : player === "scissors" && computer === "rock"
      ? "Player: ${player} \nComputer: ${computer} \nComputer wins"
      : "Player: ${player} \nComputer: ${computer} \nPlayer wins";

  return winner;
};

const displayResut = (result) => {
  alert(result);
};

const askToPlayAgain = () => {
  return confirm("Play again?");
};

const thanksForPlaying = () => {
  alert("OK, Thanks for playing");
};

// Main function
const initGame = () => {
  const startGame = confirm("Shall we play game?");
  startGame ? playGame() : decideNotToPlay();
};

// game
const playGame = () => {
  while (true) {
    let playerChoice = getPlayerChoice();
    playerChoice = formatPlayerChoice(playerChoice);
    if (playerChoice === "") {
      invalidChoice();
      continue;
    }
    if (!playerChoice) {
      decideNotToPlay();
      break;
    }
    playerChoice = evalutePlayerChoice(playerChoice);
    if (!playerChoice) {
      invalidChoice();
      continue;
    }

    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    displayResut(result);
    if (askToPlayAgain()) {
      continue;
    } else {
      thanksForPlaying();
      break;
    }
  }
};

initGame();
*/

/**
 * This script implements a simple Rock-Paper-Scissors game using JavaScript functions.
 * The game allows the user to play against the computer.
 */

// Function to prompt the player for their choice
const getPlayerChoice = () => {
  return prompt("Please enter rock, paper, or scissors");
};

// Function to format and validate the player's choice
const formatPlayerChoice = (playerChoice) => {
  if (playerChoice || playerChoice === "") {
    return playerChoice.trim().toLowerCase();
  } else {
    return false;
  }
};

// Function to handle when the player decides not to play
const decideNotToPlay = () => {
  alert("I guess you changed your mind. Maybe next time.");
};

// Function to evaluate and validate the player's choice
const evaluatePlayerChoice = (playerChoice) => {
  if (
    playerChoice === "rock" ||
    playerChoice === "paper" ||
    playerChoice === "scissors"
  ) {
    return playerChoice;
  } else {
    return false;
  }
};

// Function to alert the player for invalid choice
const invalidChoice = () => {
  alert("You didn't enter rock, paper, or scissors.");
};

// Function to get a random choice for the computer
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  const rpsArray = ["rock", "paper", "scissors"];
  return rpsArray[randomNumber];
};

// Function to determine the winner between player and computer
const determineWinner = (player, computer) => {
  const winner =
    player === computer
      ? "Tie game"
      : player === "rock" && computer === "paper"
      ? `Player: ${player} \nComputer: ${computer} \nComputer wins`
      : player === "paper" && computer === "scissors"
      ? `Player: ${player} \nComputer: ${computer} \nComputer wins`
      : player === "scissors" && computer === "rock"
      ? `Player: ${player} \nComputer: ${computer} \nComputer wins`
      : `Player: ${player} \nComputer: ${computer} \nPlayer wins`;

  return winner;
};

// Function to display the game result
const displayResult = (result) => {
  alert(result);
};

// Function to ask the player if they want to play again
const askToPlayAgain = () => {
  return confirm("Play again?");
};

// Function to thank the player for playing
const thanksForPlaying = () => {
  alert("OK, Thanks for playing.");
};

// Main function to initialize the game
const initGame = () => {
  const startGame = confirm("Shall we play the game?");
  startGame ? playGame() : decideNotToPlay();
};

// Function to start and control the game flow
const playGame = () => {
  while (true) {
    let playerChoice = getPlayerChoice();
    playerChoice = formatPlayerChoice(playerChoice);
    if (playerChoice === "") {
      invalidChoice();
      continue;
    }
    if (!playerChoice) {
      decideNotToPlay();
      break;
    }
    playerChoice = evaluatePlayerChoice(playerChoice);
    if (!playerChoice) {
      invalidChoice();
      continue;
    }

    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    displayResult(result);
    if (askToPlayAgain()) {
      continue;
    } else {
      thanksForPlaying();
      break;
    }
  }
};

// Start the game
initGame();
