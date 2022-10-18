import BaseballGame from "../index.js";

export default function printGameResult(printValue) {
    const result = document.getElementById('result');
    result.innerText = printValue;
    isAnswer(printValue);
}

function isAnswer(printValue) {
    const restartButton = document.getElementById('game-restart-button');
    if(printValue === '정답입니다') {
        restartButton.classList.remove('hidden');
    }
    handleRestart();
}

function handleRestart() {
    const restartButton = document.getElementById('game-restart-button');
    restartButton.addEventListener('click', () => {
        console.log('clicked restart');
        initPage();
    });
}

function initPage() {
    const result = document.getElementById('result');
    const userInput = document.getElementById('user-input');

    result.innerText = '';
    userInput.value = '';
    new BaseballGame();
}