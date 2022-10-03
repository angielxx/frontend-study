const loginBox = document.querySelector('#loginBox')
const appBox = document.querySelector('#appBox')
const loginForm = document.querySelector('#loginForm')
const loginInput = document.querySelector('#loginForm input')
const greeting = document.querySelector('#greeting h1')

const HIDDEN_CLASSNAME = 'hidden'
const USERNAME_KEY = 'username'

function onLoginSubmit(event) {
    event.preventDefault()
    loginBox.classList.add(HIDDEN_CLASSNAME)
    appBox.classList.remove(HIDDEN_CLASSNAME)
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username)
    console.log(username)
    paintGreeting(username)
}

function paintGreeting(username) {
    greeting.innerText = `Hello, ${username}!`
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if (savedUsername === null) {
    loginBox.classList.remove(HIDDEN_CLASSNAME)
    appBox.classList.add(HIDDEN_CLASSNAME)
    loginForm.addEventListener('submit', onLoginSubmit)
} else {
    loginBox.classList.add(HIDDEN_CLASSNAME)
    appBox.classList.remove(HIDDEN_CLASSNAME)
    paintGreeting(savedUsername)
}