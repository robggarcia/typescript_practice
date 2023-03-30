import { HasFormatter } from "../interfaces/HasFormatter";

// CLASSES
export class Invoice implements HasFormatter {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  // can also create methods
  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
  /*   // readonly can read in and outside of the class, but we can't change it
    readonly client: string;
    // private properties cannot access properties outside of the class itself
    private details: string;
    //   public amount: number;   ** this is the default behavior
    public amount: number;
    
    // initialize the values inside a constructor function
    constructor(c: string, d: string, a: number) {
      this.client = c;
      this.details = d;
      this.amount = a;
    } */

  // typescript automatically assigns these values to properties of the class
}
