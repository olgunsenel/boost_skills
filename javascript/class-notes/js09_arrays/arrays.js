// const ifade = [-5, 15, 22, -4, 45, 78, -25];
// let toplam = 0;
// for (let i = 0; i < ifade.length; i++) {
//   toplam += ifade[i];
// };

const dizi = [-5, 15, 22, -4, 45, 78, -25];

negatives = [];
positives = [];

const topla = (n) => {
  for (let i = 0; i < n.length; i++) {
  if (n[i] > 0) {
    positives.push(n[i]);
  } else {
    negatives.push(n[i]);
  }
};
//   console.log(`Pozitif toplami ${positives}`);
//   console.log(`Negatif toplami ${negatives}`);
};
topla(dizi);
console.log(positives);
console.log(negatives);


//? Dizideki notlarin ortalamasini hesaplayiniz.

// const notlar = [55, 77, 23, 89, 100];
// let sum = 0;
// for (let i = 0; i < notlar.length; i++) {
//   sum += notlar[i]
// }
// console.log(`Notlarin ortalamasi`, sum / notlar.length, `dir.`);

const adlar = [`ali`, `veli`, `deli`];
const soyAdlar = [`seni`, `beni`, `onu`];

const birlestir = (x, y) => {
  let adVeSoyadlar = [];
  for (let i in x) {
    adVeSoyadlar[i] = `${x[i]} ${y[i]}`
  }
  return adVeSoyadlar;
};
console.log(birlestir(adlar, soyAdlar));
// birlestir(adlar, soyAdlar);

//* SORU: Ogrenciler dizisinde ogrenci isimleri saklanmaktadir.
//* ogrencileri aramamizi saglayacak ve aranilan ogrenciden
//* ne kadar sayida bulunuldugunu  ana programa döndürecek bir
//* fonksiyonu yaziniz. Eger aranilan isimde bir ogrenci yok ise
//* fonksiyon "ogrenci bulunamadi" dondurulmelidir.
//*--------------------------------------------------------

// const students = ["ahmet", "mehmet", "ismet", "ahmet", "can", "mehmet", "cem"];
// const name = prompt(`isim gir: `).toLowerCase();

// const ogrenciBul = (arr, search) => {
//   let count = 0;
//   for (let i in arr) {
//     if (arr[i] === search) {
//       count++;
//     }
//   }
//   if (count === 0) {
//     return `${search} can not be found`
//   } else {
//     if (count > 1) {
//       return `${search} found ${count} times`
//     } else {
//       return `${search} found ${count} time`
//     }
//   }
// };
// console.log(ogrenciBul(students, name));


//? Dizideki herbir fiyati konsola bastiriniz.

const prices = [100, 250, 50, 89];

prices.forEach((yazdir) => console.log(yazdir));

let sum = 0;


prices.forEach((topla) => (sum += topla));
console.log(`Toplam`, sum, `dur.`);

//?prices dizisindeki her bir ara toplam degerini
//? konsola bastiriniz. Ayrica her bir fiyata %10 zam yapiniz.

let araToplam = 0;
prices.forEach((ara, index, arr) => {
  araToplam += ara;
  console.log(`${index + 1}.iteration: ${araToplam}`);
  arr[index] = Math.trunc(ara * 1.1);
});
console.log(prices);


let namess = [`Must`, `Has`, `Ali`, `Olg`, `Emi`];

const buyut = namess.map((buyuk) => buyuk.toUpperCase());
console.log(buyut, namess);

//? tlPrices dizisindeki rakamlarin Euro ve dolar
//? karsiliklarini hesaplatarak yeni dizelere kaydediniz

const euro = 18.23;
const dolar = 18.19;
const tlPrices = [100, 150, 100, 50, 80];

const kur = tlPrices.map((para) => Number((para/euro).toPrecision(3)));
console.log(kur);

//?-------------- ÖRNEK -------------------
//? Maasi 10000'den buyuk olanlari ayri bir diziye saklayalim

const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000];

bindenBuyuk = salaries.filter((z) => z >= 10000 && z <= 20000);
console.log(bindenBuyuk);

zam = salaries
.filter((on) => on < 9000)
.map((za) => Math.trunc(za*1.1));
console.log(zam);


