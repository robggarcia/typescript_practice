// typescript doesn't actually have access to the DOM during development
// thats why we get a warning above

import { Payment } from "./classes/Payments.js";
import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/listTemplate.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

// the bang operator at the end of the query selector will remove the warning!
const anchor = document.querySelector("a")!;
// could do this check below or use a bang operator
// if (anchor) {
//   console.log(anchor.href);
// }
console.log(anchor.href);

// const form = document.querySelector("form")!;

// we can also use type casting with the DOM
const form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form.children);

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list template instance
const ul = document.querySelector("ul")!; // ! tells typescript that we will definitely find the ul element on the page
const list = new ListTemplate(ul);

// add event listener for the form submit
form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
  } else {
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
let invoices: Invoice[] = [];
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

// INTERFACES
// allows us to enforce a certain structure of a class or object
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: "rob",
  age: 30,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log("I spent ", amount);
    return amount;
  },
};

let someone: IsPerson;

const greetPerson = (person: IsPerson) => {
  console.log("hello ", person.name);
};

greetPerson(me);

console.log(me);

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice("yoshi", "web work", 250);
docTwo = new Payment("martio", "plumbing work", 200);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

console.log("docs", docs);

// to compile and run: tsc -w
