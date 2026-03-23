class Company {
    constructor(name, founded, industry, kind = "Internet Company") {
        this.name = name;
        this.founded = founded;
        this.industry = industry;
        this.kind = kind;
    }
    toString() {
        return `${this.name.padEnd(15, ".")}${this.founded}`;
    }
}
const amazon = new Company("Amazon", 1994, "E-Commerce, Cloud");
const alphabet = new Company("Alphabet Inc.", 2015, "Search, Cloud, Advertising");
console.log(amazon.toString());
console.log(alphabet.toString());
export {};
