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

// GENERICS - allow us to create reusable blocks of code
// which can be reused with different types

// <T> is the generic that captures whatever item is passed into our function
// it will know all of the corresponding properties as well
// the extend keyword then limits what types can be passed in
const addUID = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 1000);
  return { ...obj, uid };
};

let docThree = addUID({ name: "yoshi", age: 40 });

console.log(docThree.name, docThree.uid);

// we can also use Generics with Interfaces (which tell us how an object must look)
// This allows for more flexibility when we are creating new objects
interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const docFour: Resource<string> = {
  uid: 1,
  resourceName: "person",
  data: "shaun",
};

const docFive: Resource<object> = {
  uid: 2,
  resourceName: "person",
  data: { name: "rob" },
};

const docSix: Resource<string[]> = {
  uid: 3,
  resourceName: "shopping list",
  data: ["potatoes", "milk", "eggs"],
};

console.log(docFive, docSix);

// ENUMS - allow us to store a set of constants (keywords)
// and associate them with a numeric value
enum ItemType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}

interface Item<T> {
  uid: number;
  itemType: ItemType;
  data: T;
}

const itemOne: Item<object> = {
  uid: 1,
  itemType: ItemType.BOOK,
  data: { title: "name of the wind" },
};

const itemTwo: Item<object> = {
  uid: 10,
  itemType: ItemType.PERSON,
  data: { name: "yoshi" },
};

console.log(itemOne, itemTwo);

// to compile and run: tsc -w
