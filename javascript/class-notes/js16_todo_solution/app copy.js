const addBtn = document.getElementById(`todo-button`);
const todoInput = document.getElementById(`todo-input`);
const todoUl = document.getElementById(`todo-ul`);

addBtn.addEventListener(`click`, () => {
  if(todoInput.value.trim() === ``) {
    alert(`Please enter new todo`);
  } else {
    const newTodo = {
      kimlik : new Date().getTime(),
      tamamlandi : false,
      yazi : todoInput.value,
    };
    yapilacaklar(newTodo);
  };
});

const yapilacaklar = (newTodo) => {
  const {kimlik, tamamlandi, yazi} = newTodo;

  const liste = document.createElement(`li`);
  liste.setAttribute(`id`, kimlik);

  tamamlandi && liste.classList.add(`completed`);


  const okIcon = document.createElement(`i`);
  okIcon.setAttribute(`class`, `fas fa-check`);
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

const prg = document.createElement(`p`);
const pTextNode = document.createTextNode(text);
prg.appendChild(pTextNode);
liste.appendChild(prg);

