const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const ToDoButton = document.getElementById("TodoButton");
const ToDoCanvas = document.querySelector(".todoCanvas");

const TODOS_KEY = "todos";
const TODO_LIST = "todolist";

let toDos = [];

function saveTodos(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const input = document.createElement("input");
    input.setAttribute("type","checkbox");
    input.setAttribute("id", TODO_LIST);
    const label = document.createElement("label");
    label.setAttribute("for", TODO_LIST);
    label.innerText = newTodo.text;
    const button = document.createElement("button");
    button.addEventListener("click", deletToDo);
    input.addEventListener("change", checkToDo);
    input.checked = newTodo.checked;
    li.appendChild(input);
    li.appendChild(label);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
        checked: false,
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveTodos();
}

function deletToDo(event){
    const li = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveTodos();
    li.remove();
}

function checkToDo(event){
    const li = event.target.parentElement;
    const singletoDo = toDos.find(element => element.id === parseInt(li.id));
    if(singletoDo.checked === false){
        singletoDo.checked = true;
    }
    else{
        singletoDo.checked = false;
    }
    saveTodos();
}

function showCanvas(){
    ToDoCanvas.classList.toggle("hidden");
}

toDoForm.addEventListener("submit", handleToDoSubmit);
ToDoButton.addEventListener("click", showCanvas);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos);
    toDos = parsedTodos;
    parsedTodos.forEach(paintToDo);
}

