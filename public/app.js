// typescript doesn't actually have access to the DOM during development
// thats why we get a warning above
import { Invoice } from "./classes/invoice.js";
// the bang operator at the end of the query selector will remove the warning!
const anchor = document.querySelector("a");
// could do this check below or use a bang operator
// if (anchor) {
//   console.log(anchor.href);
// }
console.log(anchor.href);
// const form = document.querySelector("form")!;
// we can also use type casting with the DOM
const form = document.querySelector(".new-item-form");
// console.log(form.children);
// inputs
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// add event listener for the form submit
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
const invOne = new Invoice("mario", "work on the mario website", 250);
const invTwo = new Invoice("luigi", "work on the luigi website", 300);
console.log(invOne, invTwo);
// only objects created with the Invoice class can be added to the array
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
// we can still access and change different properties
// invOne.client = "yoshi";   ** cannot do when the property is read only
invTwo.amount = 400;
// we can use ACCESS MODIFIERS to limit access to changes in properties!
// readonly
// private
// public (default behavior)
invoices.forEach((inv) => {
    console.log(inv.client, inv.amount, inv.format());
});
const me = {
    name: "rob",
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("I spent", amount);
        return amount;
    },
};
let someone;
const greetPerson = (person) => {
    console.log("hello ", person.name);
};
greetPerson(me);
console.log(me);
let docOne;
let docTwo;
