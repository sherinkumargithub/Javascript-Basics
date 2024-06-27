// JSON javascript object notation
// text format
// to send data and recieve in any programming language
// language indipendant

// normal object
const myObj = {
  name: "Sherin",
  role: ["student", "son", "gymrat"],
  sub: () => {
    console.log("I love her more than myself");
  },
};
console.log(myObj);
console.log(myObj.name);
myObj.sub();

//convertion of object to json file
const jsonFile = JSON.stringify(myObj);
console.log(jsonFile);
console.log(jsonFile.name);
// typeof
console.log(typeof myObj);
console.log(typeof jsonFile);

// convertion of json to object
const objFile = JSON.parse(jsonFile);
console.log(objFile);
console.log(typeof objFile);
