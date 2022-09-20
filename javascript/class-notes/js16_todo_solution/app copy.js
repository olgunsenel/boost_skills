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
};

const prg = document.createElement(`p`);
const pTextNode = document.createTextNode(text);
prg.appendChild(pTextNode);
liste.appendChild(prg);

