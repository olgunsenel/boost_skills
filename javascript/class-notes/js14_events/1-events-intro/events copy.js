const h1 = document.querySelector(`#header h1`);
h1.onmouseover = function() {
  h1.style.color = `red`;
  h1.style.fontWeight = `300`;
}

h1.onmouseout = () => {
  h1.style.color = `black`;
  h1.style.fontWeight = `1000`
}

h1.addEventListener(`click`, () => {
  alert(`H1 pressed`);
});

document.getElementById(`btn`).addEventListener(`click`, function(){
  const input = document.querySelector(`#input`);
  !input.value ?
  alert(`Please enter an item`) :
  alert(`${input.value} entered`);
});

const list = document.querySelectorAll(`.list`);
list.forEach((li) => {
  console.log(li);
  console.log(li.innerText);
})
