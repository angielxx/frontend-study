import getComputerInput from '../input/getComputerInput.js';
import BaseballGame from '../index.js'

function printCorrectAnswer() {
  const main = document.querySelector('main');
  const result = document.createElement('div');
  result.setAttribute('class', 'result');
  result.innerHTML = `
    <p class="result__comment">
      🎉 3스트라이크! 🎉<br>
      축하합니다! 정답입니다 😊
    </p>
    <button class="restart__button">
      재시작
    </button>
  `;
  main.append(result)

  const restartButton = document.querySelector('.restart__button');
  restartButton.addEventListener('click', () => {
    const bordRecords = document.querySelector('.bord__records');
    result.remove();
    bordRecords.innerHTML = '';
    location.reload();
  });
}


function printIncorrectAnswer(bordRecords, gameResult) {
    bordRecords.innerHTML += `
      <p class="record">${gameResult}</p>
    `;
  }


export default function printGameResult(gameResult) {
  const bordRecords = document.querySelector('.bord__records');
  
  if (gameResult === '정답') {
    const result = document.createElement('div');
    result.setAttribute('class', 'result');
    printCorrectAnswer();
    return true;
  }
  printIncorrectAnswer(bordRecords, gameResult);
  return false;
};


