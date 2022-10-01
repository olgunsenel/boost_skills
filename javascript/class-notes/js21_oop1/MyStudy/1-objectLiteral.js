//* ======================================================
//*                     (OOPS)
//* ======================================================

//* Object Literals
console.log("**** Object Literals ****");

const book1 = {
    title : `The Kramazov Brothers`,
    author : `Dostoyevski`,
    year : 1880,
    getSummary : function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
};

console.log(book1);
console.log(book1.hasOwnProperty(`author`));


const book2 = {
    title : `The Lily ot the Valley`,
    author : `Honore de Balzac`,
    year : 1888,
    getSummary : function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
};

console.log(book2);
console.log(book1.getSummary());
console.log(book2.getSummary());

//? Object Constructor //

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.ozetAl = function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    };
};

const book3 = new Book(`Kasagi`, `Omer Seyfettin`, 1920);


Book.prototype.price = 100;


//? Inherit

function Magazine(title, author, year, month){
    Book.call(this, title, author, year);
    this.month = month;
};

Magazine.prototype = Object.create(Book.prototype);

const mag1 = new Magazine(`Scientific Research`, `Einstein`, 1926, `Sep.`);
console.log(mag1);

console.log(mag1.price);


class Motors {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.getModel = function() {
            return this.model;
        };
    };
};

const moto1 = new Motors(`BMW`, `GS1200`, 2022);
console.log(moto1);
console.log(moto1.getModel);

//? Sub-class tanimlama (Inheritance)

class Bikes extends Motors {
    constructor(brand, model, year, type) {
        super(brand, model, year); //baseclass'tan gelenler
        this.type = type; //yeni ekledigimiz
    };
};

const racingBikes = new Bikes(`Honda`, `CBR`, 2019, `Racing`);
console.log(racingBikes);