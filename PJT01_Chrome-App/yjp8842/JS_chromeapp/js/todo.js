const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  // const p = document.createElement("p");
  // p.innerText = "♡";
  const span = document.createElement("span");
  span.innerText = "♥ " + newTodo.text;
  span.style.fontSize="larger";
  span.style.fontWeight="semibold";
  const button = document.createElement("button");
  button.innerText = "DONE";
  button.style.border="none";
  // button.style.marginTop="30px";
  // button.style.marginLeft="100px";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  li.style.marginTop="30px";
  li.style.marginLeft="25px";
  li.style.marginRight="40px";
  li.style.display="flex";
  li.style.justifyContent="space-between";
  // li.style.display="block";
  // li.style.justifyContent="center";
  // li.style.alignItems="center";
  toDoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text : newTodo,
    id : Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleTodoSubmit);

// function sayHello(item) {
//   console.log("this is the turn of", item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  // function sayHello를 arrow function으로 나타낸 것
  // parsedToDos.forEach((item) => console.log("this is the turn of", item));
  parsedToDos.forEach(paintToDo);
}

// 무조건 True를 반환해야 하는 함수
// function sexyFilter() {

// }