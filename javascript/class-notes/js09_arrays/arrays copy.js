const sayilar = [3, 5, 2, `2`, `uc`, 2, `bes`, 5];

console.log(sayilar.includes(5));
console.log(sayilar.includes(`5`));

console.log(sayilar.lastIndexOf(2));

console.log(sayilar.join());

console.log(sayilar.toString());


const arabalar1 = ["BMW", "Mercedes", "Fiat", "Anadol"];

const yeniArabalar = arabalar1.slice(2);
console.log(yeniArabalar);

//concat

const yazilar = ["Bugun", "hava", "cok", "guzel"];

const numbersArr = [1, 2, 5, 7];
const combinedArr = yazilar.concat(numbersArr, [`aslinda`, `cok`, `sicak`])
console.log(combinedArr);

const yasArray = [18, 22, 78, 34, 78, 79, 84];

const check = yasArray.every((yas) => yas >= 18);
// console.log(check);
check ? console.log(`Bunu yaz`) : console.log(`olmadi bunu yaz`);

const buyuk80 = yasArray.some((yas) => yas >= 80);
console.log(buyuk80);

