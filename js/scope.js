// scope var,let, const
// global scope
var x = 1;
let y = 2;
const z = 3;
console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);
// local scope (function scope)
function myFunc() {
  const z = 5;
  console.log(`function: ${x}`);
  console.log(`function: ${y}`);
  console.log(`function: ${z}`);

  if (true) {
    // local scope(block code)
    let y = 4;
    console.log(`block: ${x}`);
    console.log(`block: ${y}`);
    console.log(`block: ${z}`);
  }
}
myFunc(); //  function call
console.log(x);
console.log(y);
console.log(z);
