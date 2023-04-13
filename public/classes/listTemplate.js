// use the format method from the payment and invoice classes to create a string
// and save these in a list that can be displayed on the page
/*
    1. register a list container (ul) in the constructor
    2. create a render method to render a new 'li' to the container
        -- accepts arguments: invoice or payment, a heading, a position
        -- create the html template (li, h4, p)
        -- add the 'li' template to the start/end of the list
*/
export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos) {
        const li = document.createElement("li");
        const h4 = document.createElement("h4");
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement("p");
        p.innerText = item.format();
        li.append(p);
        pos === "start" ? this.container.prepend(li) : this.container.append(li);
    }
}
