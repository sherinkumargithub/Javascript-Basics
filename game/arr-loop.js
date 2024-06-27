// loop-array in rock and paper games
let playGame = confirm("Shall we play rock-paper-scissors?");
if (playGame) {
  // play
  while (playGame) {
    let playerChoice = prompt("Enter rock, paper, or scissors.");
    if (playerChoice !== null && playerChoice !== "") {
      const playerOne = playerChoice.trim().toLowerCase();
      if (
        playerOne === "rock" ||
        playerOne === "paper" ||
        playerOne === "scissors"
      ) {
        const computerChoice = Math.floor(Math.random() * 3);
        const rps = ["rock", "paper", "scissors"];
        const computer = rps[computerChoice];

        // result
        const result =
          playerOne === computer
            ? "Tie game!"
            : (playerOne === "rock" && computer === "paper") ||
              (playerOne === "scissors" && computer === "rock") ||
              (playerOne === "paper" && computer === "scissors")
            ? `Player: ${playerOne} \nComputer: ${computer} \nComputer wins.`
            : `Player: ${playerOne} \nComputer: ${computer} \nPlayer wins.`;

        alert(result);
        playGame = confirm("Play Again?");
        if (!playGame) alert("Ok, thanks for playing");
      } else {
        alert("You didn't enter a valid value.");
      }
    } else {
      alert("You didn't enter a value.");
      playGame = confirm("Do you want to play again?");
      if (!playGame) alert("Ok, thanks for playing");
    }
  }
} else {
  alert("I guess you changed your mind. Maybe next time!");
}
