// NUMBER
const myVariable = "54";
const myNumber = 54;
const myFloat = 54.1234;

console.log(myNumber);
console.log(myFloat);
console.log(myNumber === myFloat);

console.log(typeof myVariable);
console.log(typeof myNumber);
console.log(myNumber === myVariable);
// this print false , because of data type myvaiable belong to string but mynumber belongs to number.
console.log(myVariable + 6);
console.log(myVariable);
// to change the datatype by itself
console.log(Number(myVariable));
console.log(Number(myVariable) + 6);

console.log(Number("sherin"));
console.log(Number(true));
// boolean takes its own vlaue in js

// NUMBERS METHODS

console.log(Number.isInteger(678));
console.log(Number.isInteger(myVariable));

let myVar = "353.3333 sherin";
console.log(myVar);
console.log(Number.parseFloat(myVar));
console.log(Number.parseInt(myVar));

// to get fixed value after the point BUT here it became a string
console.log(Number.parseFloat(myVar).toFixed(2));

// To convert number to string
console.log(typeof myVariable.toString());

//chaning - is a concept which we can add multiple methods in one line of statement
console.log(parseFloat(myFloat).toFixed(2).toString());

//isNaN -Number.isNaN, not an number,it work like notequal to..
console.log(Number.isNaN(788));
console.log(Number.isNaN("Sherin"));
console.log(isNaN("Sherin"));
