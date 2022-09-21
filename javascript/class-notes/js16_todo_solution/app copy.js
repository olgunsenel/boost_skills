//?seciciler:

const addBtn = document.getElementById(`todo-button`);
const todoInput = document.getElementById(`todo-input`);
const newList = document.getElementById(`todo-ul`);

let eklenenler = JSON.parse(localStorage.getItem(`EKLE`)) 
|| [];

const eklenenleriRenderEt = () => {
  eklenenler.forEach((ekli) => {
    createElement(ekli);
  });
};

eklenenleriRenderEt();

addBtn.addEventListener(`click`, () => {
  if(todoInput.value.trim() === ``) {
    alert(`Please enter new todo`);
  } else {
    //! bose degilse bir obje olusturuyoruz.
    const newTodo = {
      kimlik : new Date().getTime(),
      yapildi : false,
      yazi : todoInput.value,
    };
    // yeniListe(newTodo);
    elementOlFunc(newTodo);
    todoInput.value = ``;

    eklenenler.push(newTodo);
    localStorage.getItem(`EKLE`, JSON.stringify(eklenenler));
    console.log(eklenenler);
    
  }
});


function elementOlFunc(newTodo){
  const {kimlik, yapildi, yazi} = newTodo;

  const liste = document.createElement(`li`);
  liste.setAttribute(`id`, kimlik);

  // newTodo.yapildi ? liste.classList.add(`completed`) : ``;
  yapildi && liste.classList.add(`completed`);

  const okIcon = document.createElement(`i`);
  okIcon.setAttribute(`class`, `fa-regular fa-circle-check`);
  liste.appendChild(okIcon);

  const yazilar = document.createElement(`p`);
  const pTextNode = document.createTextNode(yazi);
  yazilar.appendChild(pTextNode);
  liste.appendChild(yazilar);

  const deleteIcon = document.createElement(`i`);
  deleteIcon.setAttribute(`class`, `fa-regular fa-square-minus`);
  liste.appendChild(deleteIcon);

  newList.appendChild(liste);
  
  console.log(liste);
};

newList.addEventListener(`click`, (e) => {
  if(e.target.classList.contains(`fa-square-minus`)){
    e.target.parentElement.remove();
  } else if(e.target.classList.contains(`fa-circle-check`)){
    e.target.parentElement.classList.toggle(`checked`);
  };
});

todoInput.addEventListener(`keydown`, (e) => {
  if(e.code === `Enter`) {
    addBtn.click();
  };
});

addBtn.addEventListener(`click`, () => {
  todoInput.focus();
})

window.onload = function () {
  todoInput.focus();
};

