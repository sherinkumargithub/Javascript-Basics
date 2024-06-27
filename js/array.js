// array
let myArr = [];
// adding elements
myArr[0] = "sherin";
myArr[1] = " kumar";
myArr[3] = 19;
myArr[2] = "BCA";
console.log(myArr);
console.log(myArr.length);
console.log(myArr[2]);
// or
console.log(myArr[myArr.length - 1]);
// adding element into a existing array
myArr.push("click");
console.log(myArr);
// to deleate the last elment
myArr.pop();
console.log(myArr);
// to add element in front of list
myArr.unshift("Master");
console.log(myArr);
myArr.shift();
console.log(myArr);

// by declaring array inside the variable result only the length of the array
// const name = myArr.unshift(); - on adding the elements. At the same while deleting the element using pop() and shift() it print the last element in array -- const name = myArr.shift(); .

// to add/delete value in middle
// using splice we can add/delete a specific element and also we can replace it.
myArr.splice(2, 1, "Computer  Application");
console.log(myArr);

// slice operator it same as string slice but here we should declare a array inside a variable
const newArry = myArr.slice(0, 2);
console.log(newArry);

// we can reverse the order by using a reverse operator
const newArr = myArr.reverse();
console.log(newArr);

// jon -- it helps to convert the array element into strng
const newAr = myArr.join();
console.log(newAr);
// split

// const newA = myArr.split(",");
// console.log(newA); // something problem in split,it doesnt taken the join vlaue as a string

// how to merge 2 arrays--concatination
myArrayA = ["false, sherin, sherifa"];
console.log(myArrayA);
const newAArray = myArr.concat(myArrayA);
console.log(newAArray);
// spread concept same as concatination
myA = ["false, sherin, sherifa"];
myR = ["good", "bad", 423, 65];
console.log(myArrayA);
const newAR = [...myA, ...myR];
console.log(newAR);

// dimentions of array

const earnMoneyA = ["FrontEnd", "BackEnd", "DataBase"];
const earnMoneyB = ["AI", "BlockChain", "DataAnalysit"];
const growMoneyA = ["Stocks", "Gold", "Bonds"];
const growMoneyB = ["Trading", "Forex", "Options"];
const giveMoney = ["Quality Education"];

const earnMoney = [earnMoneyA, earnMoneyB];
const growMoney = [growMoneyA, growMoneyB];

//  one dimentional
console.log(earnMoneyA[1], growMoneyB[0]);

// two dimenional
console.log(earnMoney[0][1], growMoney[1][0]);

// three dimension
const sherin = [earnMoney, growMoney, giveMoney];
console.log(sherin);
console.log(sherin[0][0][1]);
