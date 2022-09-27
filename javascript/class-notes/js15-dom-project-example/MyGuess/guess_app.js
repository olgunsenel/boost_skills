let randomNumber = Math.round(Math.random()*100);
console.log(randomNumber);

let score = Number(document.querySelector(`.score`).textContent);


// let topScore = Number(document.querySelector(`.top-score`).textContent);
let topScore = localStorage.getItem(`topScore`) || 0;
document.querySelector(`.top-score`).textContent = topScore;


console.log(score);
console.log(topScore);

document.querySelector(`.check-btn`).addEventListener(`click`, () => {
  const guessDigit = Number(document.querySelector(`.guess-input`).value);
  const infoMessage = document.querySelector(`.msg`);
  const bodyBg =document.querySelector(`body`);

  if(guessDigit > 100 || guessDigit < 0){
    infoMessage.innerHTML = `Please enter a number between 1-100 !`;
    infoMessage.style.color = `red`;
  } else {
    if(!guessDigit) {
      infoMessage.innerHTML = `Please enter a number!`
      infoMessage.style.color = `red`;
    } else if(guessDigit === randomNumber) {
      localStorage.setItem(`topScore`, score);
      document.querySelector(`.top-score`).textContent = score;
      infoMessage.innerHTML = `<br> <img src="https://c.tenor.com/sZAFBih2R54AAAAC/minions.gif" width:"50">`
      topScore = score;
      document.querySelector(`.top-score`).innerHTML = topScore;
      bodyBg.classList = `bg-success`;
      document.querySelector(`.check-btn`).disabled = true;
      document.querySelector(`.secret-number`).innerHTML = randomNumber;
    } else {
      score--;
      document.querySelector(`.score`).innerHTML = score
      if(score > 0) {
        guessDigit > randomNumber ?
        infoMessage.innerHTML = `<i class="fa-solid fa-arrow-trend-down fa-2x"></i> DECREASE ` : 
        infoMessage.innerHTML = `<i class="fa-solid fa-arrow-trend-up fa-2x"></i> INCREASE `
      }else{
        infoMessage.innerHTML = `<br> <img src="https://media.giphy.com/media/sEqfAygnULZbMrMdFh/giphy.gif" width:"10">`
        document.querySelector(`.top-score`).innerHTML = score;
        document.querySelector(`.score`).innerHTML = score;
        document.querySelector(`.check-btn`).disabled = true;
        bodyBg.classList = `bg-danger`;
        document.querySelector(`.secret-number`).innerHTML = randomNumber;
      };
    };
    // console.log(score);
  };
});

document.querySelector(`.again-btn`).addEventListener(`click`, () => {
  document.querySelector(`.score`).textContent = score;
  randomNumber = Math.round(Math.random() * 100);
  document.querySelector(`.secret-number`).textContent = `?`;
  document.querySelector(`.check-btn`).disabled = false;
  document.querySelector(`body`).classList.remove(`bg-success`, `bg-danger`);
  document.querySelector(`.guess-input`).value = ``;
  document.querySelector(`.msg`).innerText = `Starting...`;
});



