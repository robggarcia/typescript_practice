// let character = "luigi";

// console.log(character);

const inputs = document.querySelectorAll("input");
console.log(inputs);

inputs.forEach((input) => {
  console.log(input);
});

// typescript uses strict types and javascript does not
// define a variable with let, var, or const
// let age = 30;
let isBlackBelt = false;

// character = "mario"; // we can change the value, but not the type
// age = 40;
isBlackBelt = true;

const circ = (diameter: number) => {
  return diameter * Math.PI;
};

console.log(circ(7.5));

// arrays
let names = ["luigi", "mario", "yoshi"];
names.push("toad");

let numbers = [10, 20, 30, 40];
numbers.push(25);

// let mixed = ["ken", 4, "chun-li", 8, 9]; // we can have multiple types if weinitially define it this way
// mixed.push("ryu");
// mixed.push(15);
// mixed[0] = 3;

// objects
// let ninja = {
//   name: "mario", // types of properties cannot change!
//   belt: "black",
//   age: 30,
// };

// ninja.age = 40;
// ninja.name = "ryu";

// EXPLICIT TYPES
let character: string;
let age: number;
let isLoggedIn: boolean;

age = 30;
isLoggedIn = true;

// arrays
let ninjas: string[] = []; // explicitly sets as an array of strings
ninjas.push("shaun");

// union types
// used if we want to define a mixed types
let mixed: (string | number | boolean)[] = [];
mixed.push("hello");
mixed.push(20);
mixed.push(false);

let uid: string | number;
uid = "123";
uid = 123;

// objects
let ninjaOne: object;
ninjaOne = { name: "yoshi", age: 30 };

// this object MUST have these properites and values
let ninjaTwo: {
  name: string;
  age: number;
  beltColor: string;
};

ninjaTwo = { name: "rob", age: 40, beltColor: "black" };

// dynamic ANY type
let page: any = 25; // declare it as any type and then initialize as 25

page = true;
page = "hello";
page = { name: "luigi" };

// the ANY type kind of undos the benefit of using typescript

let mixed2: any[] = [];
mixed2.push(5);
mixed2.push("mario");

let ninja3: { name: any; age: any };
ninja3 = { name: "yoshi", age: 24 };

console.log("test");
