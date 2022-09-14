//* =====================================
//*  GUESS MY NUMBER
//*  Game Logic
//*======================================


const randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);

document.querySelector(`.check-btn`).addEventListener(`click`, () => {
    const guessInput = Number(document.querySelector(`.guess-input`).value);
    const msg = document.querySelector(`.msg`);
    const body = document.querySelector(`body`);
});

if (!guessInput) {
    msg.innerText = `Please enter a number`;
} else if (randomNumber === guessInput) {
    msg.innerHTML = `Congratulations! You WIN!`;
    body.className = `bg-success`;
}