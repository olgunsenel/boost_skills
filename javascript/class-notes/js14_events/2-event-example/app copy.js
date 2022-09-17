const langInput = document.querySelector(`.lang-input`);
const addBtn = document.querySelector(`#add-btn`);
const deleteBtn = document.querySelector(`#delete-btn`);
const langList = document.querySelector(`#lang-list`);

const newUl = document.createElement(`ul`);
langList.appendChild(newUl);

addBtn.addEventListener(`click`, () => {
  if(!langInput.value) {
    alert(`Please enter a language`);
  } else {
    newUl.innerHTML += `<li>${langInput.value}</li>`;
    langInput.value = ``;
    langInput.focus();
  }
});

deleteBtn.addEventListener(`click`, () => {
  newUl.childElementCount > 0
  ? newUl.removeChild(newUl.lastElementChild)
  : alert(`There is no item to delete!`);
});

langInput.addEventListener(`keydown`,(tusOlayi) => {
  if (tusOlayi.code === `Enter`) {
    // console.log(tusOlayi.target);
    console.log(tusOlayi.code);
    addBtn.click();
  } if (tusOlayi.code === `NumpadEnter`) {
    addBtn.click();
  } if (tusOlayi.code === `Delete`) {
    deleteBtn.click();
  }
})








window.addEventListener(`load`, () => {
  langInput.focus();
})