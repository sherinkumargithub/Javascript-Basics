// stone paper sissor
//  stone - paper - sissor:
let playGame = confirm("Shall we play rock-paper-sissor.");
if (playGame) {
  let playerChoiice = prompt("Please enter rock, paper,sissor.");
  if (playerChoiice) {
    let playerOne = playerChoiice.trim().toLowerCase();
    if (
      playerOne === "rock" ||
      playerOne === "paper" ||
      playerOne === "sissor"
    ) {
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer =
        computerChoice === 1
          ? "rock"
          : computerChoice === 2
          ? "paper"
          : "sissor";
      let result =
        playerOne === computer
          ? "Tie game"
          : playerOne === "rock" && computer === "paper"
          ? `player: ${playerOne}\nComputer: ${computer}\n Computer wins!`
          : playerOne === "sissor" && computer === "rock"
          ? `player: ${playerOne}\nComputer: ${computer}\n Computer wins!`
          : playerOne === "paper" && computer === "sissor"
          ? `player: ${playerOne}\nComputer: ${computer}\n Computer wins!`
          : `player: ${playerOne}\nComputer: ${computer}\n Player wins!`;
      alert(result);
      let playAgain = confirm("Play again");
      playAgain ? location.reload() : alert("OK! Thanks for Playing.");
    } else {
      alert("You didn't enter the value.");
    }
  } else {
    alert("I guess you change your Mind.");
  }
} else {
  alert("May be next time.");
}
