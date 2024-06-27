// loops
// while loop

let i = 1;
while (i <= 50) {
  console.log(i);
  //   i = i + 1;
  i++;
}

// do-while is similar to while loop the one difference is while never print a variable one time, but here if you need to run the loop for atlast one time it works.

let a = 20;
do {
  console.log(a);
  a++;
} while (a <= 20);

// for loop
for (b = 1; b <= 20; b++) {
  console.log(b);
}

// looping the string value
let name = "sherin kumar";
for (let c = 0; c <= name.length; c += 2) {
  console.log(name.charAt(c));
}

// nested loop
let bike = "tvs";
for (let y = 0; y <= bike.length; y++) {
  for (let x = 0; x <= bike.length; x++) {
    console.log(y, x);
  }
}

// continue
let text = "";
for (f = 0; f < 10; f++) {
  if (f === 4) {
    continue;
  }
  text = text + f;
}
console.log(text);
