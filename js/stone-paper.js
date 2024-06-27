// Function to play the rock-paper-scissors game
function playGame(userChoice) {
  // Array of options for the game
  const options = ["rock", "paper", "scissors"];

  // Randomly select computer's choice from options
  const computerChoice = options[Math.floor(Math.random() * 3)];

  // Print user's and computer's choices
  console.log("You chose: " + userChoice);
  console.log("Computer chose: " + computerChoice);

  // Switch statement to determine the outcome of the game based on user's choice
  switch (userChoice) {
    // Case for when user chooses rock
    case "rock":
      switch (computerChoice) {
        case "rock":
          console.log("It's a tie!");
          break;
        case "paper":
          console.log("You lose!");
          break;
        case "scissors":
          console.log("You win!");
          break;
      }
      break;
    // Case for when user chooses paper
    case "paper":
      switch (computerChoice) {
        case "rock":
          console.log("You win!");
          break;
        case "paper":
          console.log("It's a tie!");
          break;
        case "scissors":
          console.log("You lose!");
          break;
      }
      break;
    // Case for when user chooses scissors
    case "scissors":
      switch (computerChoice) {
        case "rock":
          console.log("You lose!");
          break;
        case "paper":
          console.log("You win!");
          break;
        case "scissors":
          console.log("It's a tie!");
          break;
      }
      break;
    // Default case for when user's choice is invalid
    default:
      console.log("Invalid choice. Please choose rock, paper, or scissors.");
  }
}

// Example usage of the playGame function
playGame("rock");
