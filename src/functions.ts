let greet: Function;

// greet = "hello";

greet = () => {
  console.log("hello world");
};

// we can define optional input parameters with ?
// can also set a default value with c: number | string = 10
const add = (a: number, b: number, c?: number | string) => {
  console.log(a + b);
  console.log(c);
};

add(5, 10);

// can also explicitly define the return type
const minus = (a: number, b: number): number => {
  return a - b;
};

let result = minus(10, 7); // let becomes the type of the return value of the function
// result = "something else";

// TYPE ALIASES
type StringOrNum = string | number;
type objWithName = { name: string; uid: StringOrNum };

const logDetails = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};

const great = (user: objWithName) => {
  console.log(`${user.name} says hello`);
};

const greatAgain = (user: objWithName) => {
  console.log(`${user.name} says hello`);
};

// FUNCTION SIGNATURES
let greeting: (x: string, y: string) => void;
greeting = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
};

let calc: (a: number, b: number, c: string) => number;
calc = (numOne: number, numTwo: number, action: string) => {
  if (action === "add") {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
};

let logDeets: (obj: { name: string; age: number }) => void;
type person = { name: string; age: number };
// can even include type aliases
logDeets = (ninja: person) => {
  console.log(`{ninja.name} is ${ninja.age} years old`);
};
