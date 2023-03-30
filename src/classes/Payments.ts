import { HasFormatter } from "../interfaces/HasFormatter";

export class Payment implements HasFormatter {
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ) {}

  // can also create methods
  format() {
    return `${this.recipient} is owed $${this.amount} for ${this.details}`;
  }
}
