// alert
/*
alert("Hello Soldiers !!");
let myBoolean = alert("hi soldiers");
console.log(myBoolean);*/

// user to choose input
/*
let myBoolean = confirm("Hi Machii !!");
console.log(myBoolean);  */

// user to write or give input
// to avoid null value while the user cancel the popup --- null colasking operator ??
/*
let myInput = prompt("Give your Feedback about our work.");
console.log(myInput ?? "You didn't enter your feedback"); */

// it the statement if the user not enter any feedback but they give "ok" console give empty string ---it was problem --to sole we use if else stmt
let myInput = prompt("Give your Feedback about our work.");
if (myInput) {
  console.log(myInput ?? "You didn't enter your feedback");
} else {
  console.log("Kindly write your toughts.");
}
//good

// if some do extra space(whitespace) button fome user it was unwanted memory --its problem--to avoid this we use "trim"
console.log(myInput.trim().length);

// chat gpt below code
// let myInput = prompt("Give your Feedback about our work.")?.trim();

// // Check if input is empty or just whitespaces
// if (myInput) {
//   console.log(myInput);
// } else {
//   console.log("You didn't enter your feedback.");
// }

// // Check the length of the trimmed input
// console.log(myInput.length);

// gpt
// let userInput = prompt("Please enter your name:", "Default Name");
// if (userInput !== null) {
//   console.log("User input: " + userInput);
// } else {
//   console.log("User cancelled the prompt.");
// }
