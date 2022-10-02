//* ======================================================
//*        OOP - Static and Private  (ES6)
//* ======================================================

//? Static degiskenler ve metotlar butun bir class'i ilgilendiren
//? verileri tutmak veya degistirmek icin elverislidir.

//? Eger nesnelerden bagimsiz sadece ilgili class' a ait bir degiskene
//? ihtiyac varsa o zaman static degisken kullanmak mantiklidir.

//! Encapsulation OOP'nin temel unsurlarindan birisidir.
//! Bir class icerisindeki degeri/durumu class disindan dogrudan ve
//! izinsiz erisimlere kapatmak icin kullanilir.

//! Encapsulation private degiskenler ve private metotlar yardimiyla yapilir.
//! ES6 ve sornasinda private degisken ve metotlari belirtmek icin
//! # (hash) kullanilir.

//! Private degiskenler dogrudan erisilemezler. Bunlara erismek icin class
//! icerisinde tanimlanan public (genel) erisimli getter ve setter metotlar
//! kullanilir.

//! Private metotlara ise class disirasindan da eriselemez.
//! Private metotlara ancak class icerisindeki diger metotlar ile erisilebilir.


class Book {
    #id = `123456`;
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;

        this.getTitle = function () {
            return this.title;
        };
    };
    getId() {
        return this.#id;
    }
    setId(id){
        this.#id = id;
    }
};

const book1 = new Book(`Simyaci`, `Poelho Coelho`, 1988);
console.log(book1);
// console.log(book1.#id);

console.log(book1.getId());

book1.setId(`000000`);
console.log(book1.getId());

*/
