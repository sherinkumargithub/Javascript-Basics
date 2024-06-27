// errors and error handling
// js doesnt through error on any miss declared keywords or variable declaration ,to through the error message we have to go to the strict mode.
"use strict";
const variable = "sherin";
console.log(variable);

// syntax error --
//  Object..create();
// type error --
// variable = "sherifa";

// try - cath method
const makeError = () => {
  try {
    /* const name = "sk";
    name = "dharsh"; */
    throw new /*customError*/ Error("This is a custom error");
  } catch (err) {
    // console.log(err);
    // console.error(err);
    // console.warn(err);
    console.table(err.stack);
    // to get detailed error description we use stack
  } finally {
    //   it print or execute after the try execution
    console.log("...finally");
  }
};
makeError();
// custom error by function creation or buitin using Error keyword in line 17
/*
function customError(message) {
  this.message = message;
  this.name = "custom error";
  this.stack = `${this.name} : ${this.message}`;
} */
// examine this with odd/even eg.here if the condition is true mean it throw error,if conditon became false mean it throw even number.

const errorHand = () => {
  let i = 0;
  while (i <= 5) {
    try {
      if (i % 2 !== 0) {
        throw new Error("Odd Number");
      }
      console.log("Even Number");
    } catch (err) {
      console.error(err.message);
    } finally {
      console.log("...finally");
    }
    i++;
  }
};
errorHand();
