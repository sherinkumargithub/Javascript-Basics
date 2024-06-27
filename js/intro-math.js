// MATH methods and properties

console.log(Math.PI);
// TRUNC -used to neglect the extra values after the point
console.log(Math.trunc(Math.PI));
// ROUND - used to round off the given value
console.log(Math.round(Math.PI));
console.log(Math.round(879.6));
// CEIL - to jump to another value like sealing
console.log(Math.ceil(4.2));
// FLOOR - it similar to trunc but gives changes in negative value
console.log(Math.floor(4.3));
console.log(Math.floor(-4.3));

// POW(power of)-it work like square root, for multiplication over multiple
console.log(Math.pow(2, 3));
// MIN- give minimum vlaue from the given input
console.log(Math.min(10, 5, 547, 56, 55, 5, 447, 86));
// max
console.log(Math.max(10, 5, 547, 56, 55, 5, 447, 86));
// RANDoM - to choose random number
console.log(Math.random());
console.log(Math.random());
// to get 1-10 random number,here using floor is good practice
console.log(Math.floor(Math.random() * 10 + 1));

// code challenge - to get a random letter from input
let myName = "Sherinkumar";

console.log(myName.charAt(Math.floor(Math.random() * 11)));
console.log(myName.charAt(Math.floor(Math.random() * myName.length)));
