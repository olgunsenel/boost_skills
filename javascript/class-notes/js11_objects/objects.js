//* ===================================================
//*                 (OBJECTS)
//* ===================================================

//? Diziler sirali bellek bölgeleridir.Bu yuzden dizilere
//? indeksleme ile erisebiliriz. Ancak daha karmasik (unstructured)
//? verilerimiz icin  Object'leri kullanabiliriz.

//? Object'lerde Key-value (property-value) yapisi kullanilir.
//? Herhangi bir veriyi erismek icin property (key) adi kullanilir.

console.log("******* Objects *********");

//! 3 farkli yontem ile Object olusturulabilir
//* ---------------------------------------------------------
//* 1- Object() class'ından new Operatörü ile
//* ---------------------------------------------------------

const arabalar = new Object();
arabalar.marka = "BMW";
arabalar.motor = "1.3";
arabalar.model = 2022;
arabalar.lpg = true;
console.log(arabalar);

//!Read
console.log(arabalar.lpg); //? .notation
console.log("MODEL:", arabalar["model"]); //? Square bracket notation

//? Square bracket yonteminin en buyuk avantaji key degerini
//? degisken olarak kullanabilmemizdir.
const key = "marka";
console.log(arabalar[key]);

arabalar.motor = "1.6";
console.log(arabalar);

//* ---------------------------------------------------------
//* 2- object constructor'i kullanarak (OOP ile ayrintilandirilacak)
//* ---------------------------------------------------------

//? Object Constructure
function Personel(id, ad, maas) {
  this.id = id;
  this.ad = ad;
  this.maas = maas;
  // console.log(this);
}

const kisi1 = new Personel("1234567890", "Mustafa", 15000);
const kisi2 = new Personel("177567890", "Canan", 25000);
// console.log(kisi1);
console.log(kisi1.ad);
console.log(kisi2.maas);
console.log(kisi2["id"]);
