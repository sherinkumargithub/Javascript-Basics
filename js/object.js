// object
const myOnj = { name: "sherin" };
console.log(myOnj.name);

const anotherobj = {
  subcriber: true,
  no: 117,
  content: {
    edu: "bca",
    clg: "srcas",
  },
  goal: ["money", "love", "peace"],
};
console.log(anotherobj.content.edu);
console.log(anotherobj["content"]);
// function inside the object

const anobj = {
  action: function () {
    return "Hello my Friend";
  },
  being: "Student",
  occur: function () {
    // inherit concept
    return ` ${this.action()} Mike Tyson `;
  },
};
console.log(anobj.action());
console.log(anobj.occur());

const vehical = {
  doors: 2,
  engine: function () {
    return "V12 4 liter 6 cylinder turbo charge petrol engine ";
  },
};
console.log(vehical.engine());
// inherit ,borrowing another variable methods other.
const car = Object.create(vehical);
console.log(car.engine());
console.log(car.doors);
// we can modify and add property in a inherited property
car.wheel = 4; // adding
console.log(car);
// modification -if wwe overwrite a function means its overlap
car.engine = function () {
  return "V4 4 cylinder triple spark petrol engine";
};
console.log(car.engine());

const audi = Object.create(car);
console.log(audi.wheel);
audi.engine = function () {
  return "audi a3 v8 engine";
};
console.log(audi.engine());

// to print only keys and values differtly
const lcu = {
  actor: "vijay",
  music: "anirudh",
  director: "lokesh",
  producer: "7 screen",
};

// to delete the specific property
delete lcu.producer;

// ulike geting a undefined values to get true or false boolean value we use "hsOwnProperty"
console.log(lcu.producer);
console.log(lcu.hasOwnProperty("producer"));
console.log(lcu.hasOwnProperty("actor"));

console.log(Object.keys(lcu));
console.log(Object.values(lcu));

// we can iterate each property inside the object using "for-in loop"
for (let movie in lcu) {
  console.log(lcu[movie]);
  console.log(`${movie} is ${lcu[movie]}`);
}

// de-structing the object
const { music: lcuMusicDirector } = lcu;
console.log(lcuMusicDirector);
const { music: lcuMusicDirecto, director: lcuDirector } = lcu;
console.log(lcuMusicDirecto, lcuDirector);
// or
const { actor, music, director, producer } = lcu;
console.log(director);
//
function singer({ music }) {
  return music;
}
console.log(singer(lcu));
