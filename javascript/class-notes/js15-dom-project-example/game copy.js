//* =====================================
//*  GUESS MY NUMBER
//*  Game Logic
//*======================================

//! 1.45 dk

const randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);

//? Variables
let score = 10;
let topScore = 0;

document.querySelector(`.check-btn`).addEventListener(`click`, () => {
  const guessInput = Number(document.querySelector(`.guess-input`).value);
  const msg = document.querySelector(`.msg`);
  const body = document.querySelector(`body`);
  if (!guessInput) {
    // document.querySelector(`.msg`).innerText = `Please enter a number`; //*? YUKARIDA CONST MSG ILE OLUSTURMAZSAK BU SEKILDE */
    msg.innerText = `Please enter a number`;
  } else if (randomNumber == guessInput) {
    // msg.innerText = `Congratulations. You WIN!`; //*? Sadece yazi
    msg.innerHTML = `Congratulations. You WIN! <i class="fa-solid fa-face-grin-hearts fa-2x"></i>`; //*? html iconlu
    // document.querySelector(`body`).style.background = `green`; //*? YUKARIDA CONST BODY ILE OLUSTURMAZSAK BU SEKILDE */
    body.className = `bg-success`;

    if (score > topScore) {
      topScore = score;
      document.querySelector(`.top-score`).textContent = topScore;
    }
    document.querySelector(`.secret-number`).textContent = randomNumber;
  } else {
    score --;
    if (score > 0) {
      guessInput > randomNumber
      ? (msg.innerText = `DECREASE`)
      : (msg.innerText = `INCREASE`);
    } else {
      // msg.innerText = `You Lost!`; //? Text hali. Biz kaybedince ikon kullanacagiz
      msg.innerHTML = `You Lost! <i class="fa-regular fa-face-sad-tear fa-2x"></i>`
      body.className = `bg-danger`;
      document.querySelector(`.check-btn`).disabled = true;
    }
    

    document.querySelector(`.score`).textContent = score;
  }
});