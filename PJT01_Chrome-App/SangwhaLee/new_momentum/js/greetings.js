const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const focusForm = document.getElementById("focus-today");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function onLoginSubmit(event){
    
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username)
    loginForm.classList.add(HIDDEN_CLASSNAME);
    console.log(username);
}

function handleLinkClick(event){
    console.log(event);
    alert("clicked");
}

function paintGreetings(username){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    focusForm.classList.remove(HIDDEN_CLASSNAME);
    const date = new Date();
    const hours = date.getHours();
    if(hours >= 5 && hours < 12){
        greeting.innerText = `Good morning, ${username}`;
    }
    else if(hours >= 12 && hours < 18){
        greeting.innerText = `Good afternoon, ${username}`;
    }
    else{
        greeting.innerText = `Good evening, ${username}`;
    }
    greeting.classList.add("make-text-white");
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else{
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(savedUsername);
}