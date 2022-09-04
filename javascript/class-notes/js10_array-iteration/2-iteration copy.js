// const rakamlar = [-5, 15, 22, -4, 45, 78, -25];

// let toplam = 0;

// for (let i = 0; i < rakamlar.length; i++) {
//   toplam += rakamlar[i];
// }

// console.log(toplam);



// const dizi = [-5, 15, 22, -4, 45, 78, -25];

// const topla = (n) => {
//   let negatifler = [];
//   let pozitifler = [];
//   for (let i = 0; i < n.length; i++) {
//     if(n[i] < 0) {
//       negatifler.push(n[i]);
//     } else {
//       pozitifler.push(n[i]);
//     }
//     }
//     console.log(`Dizideki pozitif sayilarin toplami = ${pozitifler}`);
//     console.log(`Dizideki negatif sayilarin toplami = ${negatifler}`);
//   };
//   topla(dizi);

const notlar = [55, 77, 23, 89, 100];

let toplam = 0;

for (let i = 0; i < notlar.length; i++) {
  toplam += notlar[i];
}

console.log("Ortalama" toplam / notlar.length);