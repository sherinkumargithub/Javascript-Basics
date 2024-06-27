// IF statement
/*
let money = "Work";
let sucess;
if (money) {
  sucess = `Hard ${money}`;
  console.log(sucess);
} else {
  sucess = "Smart Work";
  console.log(sucess);
} */

// else if
let unsucessful = false;
let money = "Work";
let life = true;
let sucess;
if (unsucessful) {
  sucess = "LOVE";
} else if (money && life) {
  sucess = `Hard ${money} for peaceful life.`;
} else if (money) {
  sucess = `Hard ${money}`;
} else {
  sucess = "Smart Work";
}
console.log(sucess);
// it check one by one checklist from the given conditions

// Grade program
let score = 39;
let collegeStudent = true;
let grade;
if (score > 80 && score <= 100) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 60) {
  grade = "C";
} else if (score >= 40) {
  grade = "D";
} else {
  // writing if stmt inside the else part is called nested if or decision tree
  if (collegeStudent) {
    grade = "Areear";
  } else {
    grade = "Fail";
  }
}
console.log(grade);
