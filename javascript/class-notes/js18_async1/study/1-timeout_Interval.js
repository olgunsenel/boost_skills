//*==================================================
//*        1- Senkron-Asenkron Programlama
//*==================================================

//! Javascript, single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basriyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Asyn Programlama
//? kullanilmasi cok onemlidir.

//* Senkron
//* ------------------------------------------------
// const bekle = (wait)=> {
//   const startTime = new Date().getTime();
//   while(new Date().getDate() < startTime + wait){}
// };

// console.log(`hello`);

// console.time(`timer`);
// bekle(3000);
// console.timeEnd(`timer`)
// console.log(`FS12`);

//* Asenkron (setTimeout)
//*----------------------------------------------------
// console.log(`timeOut`);
// setTimeout(() => {
//   console.log(`hi`);
// }, 3000);

// setTimeout(() => {
//   console.log(`merhaba`);
// }, 500);

// console.log(`bitti`);

//* Asenkron (setInterval, clearInterval)
//*----------------------------------------------------
// console.log(`timer Stardted`);
// let counter = 0;
// const intervalId = setInterval(() => {
//   console.log(++counter);
//   if(counter > 5){
//     clearInterval(intervalId)
//   }
//   console.log(`timer Stopped`);
// }, 1000);
// clearInterval() 




//! Callback Hell (nested ve birbirine bagli callback'ler)
//!-----------------------------------------------------
//* Eger birbirine bagimli asenkron kodlarin yazilmasi gerekirse,nested callback
//* yapisinin kullanilmasi gerekebilir. Fakat bu iyi bir programlama yaklasimi degildir.
// !callback hell olarak adlandirilan bu yapinin anlasilmasi ve surdurulebilirligi oldukca zordur.

// setTimeout(() => {
//   console.log(`hi`);
//   setTimeout(() => {
//     console.log(`Hello`);
//     setTimeout(() => {
//       console.log(`you`);
//     }, 1000);
//   }, 1000);
// }, 1000);

//? COZUMLER:
//?----------------------------------------------------
//* 1- XMLHttpRequest (Eski yontem, Ornek: AJAX)
//? https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
//* 2- Promise,
//! 3- Fetch API (Promise'in basitlestirilmis hali),
//! 4- ASYNC-AWAIT (Fetch API'nin makyajlanmis hali)


// const myPromise = new Promise((resolve, reject) => {
//   resolve(`Data fetched`);
//   reject(`Fetch halted`);

// });

// myPromise.then((res)=> console.log(res))



console.log(`FETCH`);

// fetch(`https://api.github.com/users`).then((res)=> console.log(res));

fetch(`https://api.github.com/users`)
.then((res) => res.json())
.then((data) => updateDOM(data));

const updateDOM = (users) => {
  console.log(users);
  const userDiv = document.querySelector(`.users`);
  users.forEach((user) => {
    const {login, avatar_url} = user;
    userDiv.innerHTML += `<h2>${login}<h2/> <img src="${avatar_url}" width="300px" alt=""/>`
  });
};