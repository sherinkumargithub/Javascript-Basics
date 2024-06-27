// function
// in javascript program contain its own built in function and its called as methods.
// we can able to create our own function
/*
function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(20, 50));
console.log(sum(20, 80));
*/

// if we not enter num2 value mean it become undifined and the output shown NaN .to avoid this and print the exisisting value of num1 we use if statement inside the function.

function sum(numm1, numm2) {
  console.log(numm1);
  console.log(numm2);
  if (numm2 === undefined) {
    return numm1;
  }
  return numm1 + numm2;
}
console.log(sum(20));

// geting a user name from 100 of mail address using functions
let myMail = "sherinstrix777@gmail.com";
console.log(myMail.slice(0, myMail.indexOf("@")));

// the same tast with userdefined fuction
function getUserNameFromMail(mail) {
  return mail.slice(0, mail.indexOf("@"));
}
console.log(getUserNameFromMail("sherinstoic117@gamil.com"));

// function which helps to get propercase of strings
const toProperCase = function (text) {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};
console.log(toProperCase("sheRIN KUmaR"));

// same
const toPropercase = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};
console.log(toPropercase("sheRIN KUmaR"));

// sk
const toPropercasee = (text) => {
  return (
    text.charAt(0).toUpperCase() +
    text.slice(1, text.indexOf("@")).toLowerCase()
  );

  // return text.slice(0, indexOf("@"));
};
console.log(toPropercasee("sheRINKUmaR117@gmail.com"));
