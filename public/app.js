// typescript doesn't actually have access to the DOM during development
// thats why we get a warning above
import { Payment } from "./classes/Payments.js";
import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/listTemplate.js";
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
// list template instance
const ul = document.querySelector("ul"); // ! tells typescript that we will definitely find the ul element on the page
const list = new ListTemplate(ul);
// add event listener for the form submit
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
    // console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
    console.log(doc);
});
//   *************
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
        console.log("I spent ", amount);
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
docOne = new Invoice("yoshi", "web work", 250);
docTwo = new Payment("martio", "plumbing work", 200);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log("docs", docs);
// GENERICS - allow us to create reusable blocks of code
// which can be reused with different types
// <T> is the generic that captures whatever item is passed into our function
// it will know all of the corresponding properties as well
// the extend keyword then limits what types can be passed in
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 1000);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docThree = addUID({ name: "yoshi", age: 40 });
console.log(docThree.name, docThree.uid);
const docFour = {
    uid: 1,
    resourceName: "person",
    data: "shaun",
};
const docFive = {
    uid: 2,
    resourceName: "person",
    data: { name: "rob" },
};
const docSix = {
    uid: 3,
    resourceName: "shopping list",
    data: ["potatoes", "milk", "eggs"],
};
console.log(docFive, docSix);
// to compile and run: tsc -w
