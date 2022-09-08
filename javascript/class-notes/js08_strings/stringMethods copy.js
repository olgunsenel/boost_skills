// let str1 = `Clarusway`;
// console.log(str1, typeof str1);

// const str2 = `bisiklet`;

// const str4 = new String("Non-P");
// console.log(str4, typeof str4);

// const strYaz = new String(`buraya yaz`);
// console.log(strYaz);

// console.log(str1.toLowerCase());
// console.log(str1);

// const numm = 5;
// const str5 = str1 + str4 + numm;
// console.log(str5);

// console.log(str1.concat(str4));
// console.log(str1, str4);

// str1 = str1.concat(str4, `yeniBi`);
// console.log(str1);

// const myName = `Olgun Senel`;
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());

// let yourName = `Niyazi`;
// // yourName = yourName.toLocaleUpperCase(`tr`);
// yourName = yourName.toUpperCase();
// console.log(yourName);

const esitMio = (str1, str2) => str1.toLocaleUpperCase() === str2.toLocaleUpperCase() ? `${str1} ile ${str2} esittir` : `${str1} ile ${str2} esit degildir`;

console.log(esitMio(`veli`, `veli`));

const denkMi = (abc, cde) => abc.toLocaleUpperCase() === cde.toLocaleUpperCase() ? `${abc} ve ${cde} esittir` : `${abc} ve ${cde} esit degildir`;

console.log(denkMi(`olgun`, `OlGtun`));

const arts = `buraya karakter Sorgulama icin cumle yazdim`;
console.log(arts.charAt(9));
console.log(arts.charAt());

console.log(arts.length);

console.log(arts.charAt(arts.length - 1));

console.log(arts.includes(`kar`, 1));

const kaka = arts.indexOf(`Sorgulama`);
console.log(kaka);
console.log(arts.lastIndexOf(`cumlet`));

const buHarf = /[A-Z]/;
const nokta = /[.]/;
console.log(arts.search(buHarf));
console.log(arts.search(nokta));

let sarkiSozu = `Sen gulunce guller acar gul pembe!`;
console.log(new String(sarkiSozu));
console.log(sarkiSozu.startsWith(`Sen`));
console.log(sarkiSozu.startsWith(`gulunce`, 4));

let read = `oku baban gibi`;

read = read.replace(`baban gibi`, `salak`);
console.log(read);

let tekrar = `gece gece gece geldi bana gece`;

tekrar = tekrar.replaceAll(`gece`, `sikinti`);
console.log(tekrar);

console.log(tekrar.replaceAll(/ec/gi, `öt`));

const goksel = `bi seni konusurum sadece seni`;

console.log(goksel.slice(16));
// const slit = goksel.slice(17);
// console.log(slit, typeof slit);

const kaya = `adi bahtiyar`;
console.log(kaya.split(""));

const ramazan = "    Hoş geldin ya şehri Ramazan     ";
console.log(ramazan);
console.log(ramazan.length); // 36
console.log(ramazan.trim());
console.log(ramazan.trim().length); //27

