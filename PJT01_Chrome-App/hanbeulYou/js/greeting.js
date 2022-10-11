const loginModal = document.querySelector('.modal')
const loginForm = document.querySelector('#login-form')
const loginInput = document.querySelector('#login-form input')
const myHome = document.querySelector('#my__home')
const myURL = document.querySelector('#my__url')

const HIDDEN_CLASSNAME = 'hidden';
const DONTSHOW_CLASSNAME = 'dontshow';
const USERNAME_KEY = 'username';
const FADEOUT_CLASSNAME = 'fadeOut';

function onLoginSubmit(event){
    event.preventDefault();
    loginModal.classList.add(FADEOUT_CLASSNAME);
    setTimeout(function(){
        loginModal.classList.add(HIDDEN_CLASSNAME);
    }, 2000)
    
    loginForm.classList.add(FADEOUT_CLASSNAME);
    setTimeout(function(){
        loginForm.classList.add(HIDDEN_CLASSNAME);
    }, 2000)
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    myHome.innerText = `${username}님의 미니홈피`;
    myURL.innerText = `https://ssyworld.com/${username}`;
    myHome.classList.remove(DONTSHOW_CLASSNAME);
    myURL.classList.remove(DONTSHOW_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginModal.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener('submit', onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}