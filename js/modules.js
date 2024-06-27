// modules main (import)
/*
import earnMoney from "./module2.js";
import { growMoney, giveMoney } from "./module2.js";
console.log(earnMoney());
console.log(growMoney());
console.log(giveMoney());
*/

// we can call our fuction with our need name to avoid duplcate so the keyword "as"
/*
import earnMoney from "./module2.js";
import { growMoney as grow, giveMoney as give } from "./module2.js";
console.log(grow());
console.log(give());

// another method to import -- import everything
import * as sherin from "./module2.js";
console.log(sherin.default());
console.log(sherin.growMoney());
*/
import friends from "./module2.js";

const me = new friends("sherin");
console.log(me.emailme());
