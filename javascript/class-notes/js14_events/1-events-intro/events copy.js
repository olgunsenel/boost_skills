//* ======================================================
//*                        EVENTS
//* ======================================================

console.log("****** EVENTS *******");

//* EXAMPLE-1 (Mouse Over, Mouse Out )
//* -------------------------------------------------------
const hUnsuru = document.querySelector(`#header h1`);
console.log(hUnsuru);

hUnsuru.onmouseover = function () {
  hUnsuru.style.color = `red`;
  hUnsuru.style.fontWeight = `300`;
};

hUnsuru.onmouseout = () => {
  hUnsuru.style.color = `black`;
  hUnsuru.style.fontWeight = `900`;
};

hUnsuru.addEventListener(`click`, () => {
  alert(`H1 gecildi`);
});

//* EXAMPLE-2 (addEventListener())
//* -------------------------------------------------


// document.getElementById(`btn`).addEventListener(`click`, () => {
//   if (!input.value) {
//     alert(`Please enter an item`);
//   } else {
//     alert(`${input.value} entered.`);
//   }
// })

document.getElementById(`btn`).addEventListener(`click`, () => {
  const input = document.querySelector(`#input`);
  !input.value ? alert(`Please enter an item`) : alert(`${input.value} entered.`);
input.value = ``;
document.querySelector(`#input`).focus();
});



//* EXAMPLE-3
//* -------------------------------------------------
const birListe = document.querySelectorAll(`.list`);

birListe.forEach((lido) => {
  lido.style.transition = `all 1s`;
  lido.style.lineHeight = `2rem`;


  lido.onmouseover = () => {
    lido.style.fontSize = `2rem`;
    lido.style.transform = `translateX(20px)`;
  };
  lido.onmouseout = () => {
    lido.style.fontSize = `1rem`;
    lido.style.transform = `translateX(-20px)`;
  };
});

//* EXAMPLE-4 (onload)
//* -------------------------------------------------

window.onload = () => {
  document.querySelector(`#input`).focus();
};