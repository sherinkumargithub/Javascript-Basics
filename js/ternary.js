// TERNARY OPERATORS
// (here if the variable any value it consider as a true ,so it prit if condition)
let bike = "yamaha";
let own = bike ? "r15" : "cbr150";
console.log(own);

// grade program using ternary operator
let score = 67;
let grade =
  score > 80 && score <= 100
    ? "A"
    : score >= 80
    ? "B"
    : score >= 60
    ? "C"
    : score >= 40
    ? "D"
    : "Fail";
console.log(grade);

// stone paper
let player = "paper";
let computer = "stone";
let result =
  player === computer
    ? "Tie"
    : player === "paper" && computer === "sissor"
    ? "computer win"
    : player === "sissor" && computer === "stone"
    ? "computer win"
    : player === "stone" && computer === "paper"
    ? "computer win"
    : "user win";
console.log(result);
