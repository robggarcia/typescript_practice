"use strict";
let greet;
// greet = "hello";
greet = () => {
    console.log("hello world");
};
// we can define optional input parameters with ?
// can also set a default value with c: number | string = 10
const add = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10);
// can also explicitly define the return type
const minus = (a, b) => {
    return a - b;
};
let result = minus(10, 7); // let becomes the type of the return value of the function
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const great = (user) => {
    console.log(`${user.name} says hello`);
};
const greatAgain = (user) => {
    console.log(`${user.name} says hello`);
};
// FUNCTION SIGNATURES
let greeting;
greeting = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
let calc;
calc = (numOne, numTwo, action) => {
    if (action === "add") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
let logDeets;
// can even include type aliases
logDeets = (ninja) => {
    console.log(`{ninja.name} is ${ninja.age} years old`);
};
