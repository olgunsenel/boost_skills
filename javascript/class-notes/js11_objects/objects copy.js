//* ===================================================
//*                 (OBJECTS)
//* ===================================================

//? Diziler sirali bellek bölgeleridir.Bu yuzden dizilere
//? indeksleme ile erisebiliriz. Ancak daha karmasik (unstructured)
//? verilerimiz icin  Object'leri kullanabiliriz.

//? Object'lerde Key-value (property-value) yapisi kullanilir.
//? Herhangi bir veriyi erismek icin property (key) adi kullanilir.

console.log("******* Objects *********");

// const obje = {
//     key : value,
//     ad: soyad,
//     araba: marka,
//     motor: model
// };

const arabalar = new Object();
arabalar.marka = `BMW`;
arabalar.motor = `1.3`;
arabalar.model = 2022;
arabalar.lpg = true;
console.log(arabalar);

const motosiklet = new Object();
motosiklet.cc = 1200;
motosiklet.model = `cross`;
motosiklet.year = 2021;
motosiklet.dct = false;

console.log(motosiklet);

//! Read

console.log(motosiklet.dct);
console.log(motosiklet[`model`]);

const key = `cc`;
console.log(motosiklet[key]);

motosiklet.cc = 750;
console.log(motosiklet);

//* object constructor yontemi

function Person(id, name, occupy) {
    this.perID = id;
    this.perName = name;
    this.perOccupy = occupy;
}

const person1 = new Person(`11658965478`, `Hasan`, 22000);
console.log(person1);
console.log(this);

//* object literal yontemi

const worker = {
    name : `john`,
    surname : `gotten`,
    age : 36,
    job : `fuller`,
    language : [`C++`, `Ruby`, `Python`, `Go`, `JavaScript`],
    salary : 36000
}
console.log(worker);
console.log(worker.job);
console.log(worker[`job`]);
console.log(worker[`language`].forEach((l) => console.log(l)));

worker.yeniBiSeyEkle = `Bu Yeni bi sey`;
console.log(worker);
worker.email = `olg@gmail.com`
console.log(worker);

worker[`salary`] = worker[`salary`]*1.10; 
//veya worker[`salary`] *= 1.1;
console.log(worker);

//* object copy


// const thatman = {
//     name : `john`,
//     surname : `gotten`,
//     age : 36,
//     job : `fuller`,
//     language : [`C++`, `Ruby`, `Python`, `Go`, `JavaScript`],
//     salary : 36000
//     calculateAge: function () {
//         return new Date().getFullYear() - this.age;
//     }
//     summary: () => {
//         console.log(this);
//         return 
//     }


const insanlar = {
    kucuk: {
        name: `fatih`,
        surname: `celik`,
        age: 36
    },
    buyuk: {
        name: `fatih`,
        surname: `celik`,
        age: 36,
        license: false
    }
};

console.log(insanlar);

console.log(insanlar.buyuk.age);
    