const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".input");
const ulEl = document.querySelector(".list");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  toDoList();
});

function toDoList() {
  let newTask = inputEl.value;
  //   here we got the value entered in the input box.
  // now we will create the html Elements.
  const liEl = document.createElement("li");
  liEl.innerText = newTask;
  ulEl.appendChild(liEl);

  inputEl.value = "";

  const checkBtnEl = document.createElement("div");
  checkBtnEl.innerHTML = `<i class="fas fa-check-square"></i>`;
  liEl.appendChild(checkBtnEl);

  const trashBtnEl = document.createElement("div");
  trashBtnEl.innerHTML = `<i class="fas fa-trash"></i>`;
  liEl.appendChild(trashBtnEl);

  // functionality of buttons
  checkBtnEl.addEventListener("click", () => {
    liEl.classList.toggle("checked");
  });
  trashBtnEl.addEventListener("click", () => {
    liEl.remove();
  });
}
