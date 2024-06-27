/* // class is template for an object
// class comes under ES6 concept of js in 2006
// In object
const bike = {  
  brand: "yamaha",
  model: "r15 v2",
  engine: function () {
    return `${this.model} 150cc vva ${this.brand}`;
  },
};
console.log(bike.engine());
// bike.engine();

// In class
class bikee {
  constructor() {
    this.brand = "yamaha";
    this.model = "r15 v2";
  }
  engine() {
    return console.log(`${this.model} 150cc vva ${this.brand}`);
  }
}
const myBike = new bikee();
console.log(myBike); */

// class is a template for an object
// object
const myBike = {
  brand: "Yamaha",
  model: "R15 V2",
  engine: function () {
    return `${this.brand} 155cc ${this.model} vva engine`;
  },
};
// object work like a complex data structure, to provide syntax to the object we prefer class.
console.log(myBike.engine());
// console.log(myBike);

// class
class bike {
  constructor() {
    this.brand = "yamaha";
    this.model = "r15 v2";
  }
  // here we dont need to declare function keyword
  engine() {
    return `${this.brand} 155cc ${this.model} vva engine`;
  }
}
const dreamBike = new bike();
console.log(dreamBike.engine());
console.log(dreamBike.model);
//unlike object we can get a user input in class by inserting a parameter inside the function.

// declaring data in parameter or creating a template for our objects
class motorcycle {
  constructor(yearOrg, brandName, modelName) {
    this.year = yearOrg;
    this.brand = brandName;
    this.model = modelName;
    this.cool = "oil coolent";
  }
  // get set -concept .eg with (cool)
  get coolingSystem() {
    return this.cool;
  }
  set coolingSystem(coolingSystem) {
    this.cool = coolingSystem;
  }
  engine() {
    return ` ${this.year} ${this.brand} 155cc ${this.model} ${this.cool} vva engine`;
  }
}
const myMotorcycle = new motorcycle("2012", "yamaha", "r15 v2");

// const sabinMotorcycle = new motorcycle("2024", "yamaha", "MT 15");
// console.log(sabinMotorcycle.engine());
// modification using get set;
myMotorcycle.coolingSystem = "liquid cool";
console.log(myMotorcycle.engine());

// here the same process using a functon
class motor {
  constructor(yearOrg, brandName, modelName) {
    this.year = yearOrg;
    this.brand = brandName;
    this.model = modelName;
    this.cool = "oil coolent";
    this.kit = [];
  }

  getcooling() {
    return this.cool;
  }

  setcooling(coolingSystem) {
    this.cool = coolingSystem;
  }
  getkit() {
    return this.kit;
  }
  setkit(totalkit) {
    this.kit.push(totalkit);
  }
  engine() {
    return `${this.year} ${this.brand} 155cc ${this.model} ${this.cool} vva engine`; // Corrected here
  }
}

const myMotor = new motor("2012", "yamaha", "r15 v2");

myMotor.setcooling("liquid cool");
console.log(myMotor.engine());
// console.log(myMotor.cool); OR
console.log(myMotor.getcooling());

// to add options or varient on specific property or a values we use array on it.eg with (kit)..refer 100 line
myMotor.setkit("150 section tyre");
myMotor.setkit("upside down foks");
myMotor.setkit("teliscopic mono shockabsorberr");
console.log(myMotor.getkit());

// let see parent/chid concepts in class using piza eg.
class Pizza {
  // parent class
  constructor(sizePizza) {
    this.size = sizePizza;
    this.crust = "original";
  }
  getCrust() {
    return this.toppings;
  }
  setToppings(crustPizza) {
    this.crust.push(crustPizza);
  }
}

// child class
class spclPizza extends Pizza {
  constructor(sizePizza) {
    super(sizePizza);
    this.type = "Margarita";
  }
  slice() {
    console.log(
      `Our ${this.type} ${this.size} ${this.crust} size pizza has 8 slices`
    );
  }
}
// object
const myspclPizza = new spclPizza("medium");
myspclPizza.slice(); //function call

// In javascript we can simply modify the property value ,to avoid this there is a solution called factory function.
// Factory function
function pizzaFactory(sizePizza) {
  const crust = "original";
  const size = sizePizza;
  return {
    bake: () => console.log(`Baking a ${size} ${crust} crust pizza`),
  };
}
// object
const myPiza = pizzaFactory("small");
myPiza.bake();
// But here you cant able to call a property by using . methods,it only return the function otherwisw it through undefine -eg.
console.log(myPiza.crust);

// but slso this is a problem here to overcome this problem we use "#" operator beffore the property to define it as a private property so it cant able to access outside the class bt we can access inside the class -eg.
class piiza {
  crust = "original";
  #sause = "tomaoto";
  constructor(sizePizza) {
    this.size = sizePizza;
  }
  n;
  getCrust() {
    return this.crust;
  }
  setCrust(crustPiza) {
    this.crust = crustPiza;
  }
  bake() {
    return console.log(
      `Baking a ${this.size} ${this.crust} ${this.#sause} pizza`
    );
  }
}
// object
const mypii = new piiza("small");
mypii.setCrust("pepered");
mypii.bake();
// conole.log(piiza.#sause) here it is a private property so it cant acess outside our class
