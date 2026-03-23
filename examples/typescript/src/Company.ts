class Company {
    constructor(
        private name: string, 
        private founded: number,
        private industry: string, 
        private kind: string = "Internet Company"
    ) {
        
    }

    public toString(): string {
        return `${ this.name.padEnd(15, ".") }${this.founded}`;
    }

}

const amazon: Company = new Company("Amazon", 1994, 
    "E-Commerce, Cloud");

const alphabet: Company = new Company("Alphabet Inc.", 2015, 
    "Search, Cloud, Advertising");

console.log( amazon.toString() );
console.log( alphabet.toString() );
