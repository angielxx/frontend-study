import getUserInput from '../input/getUserInput.js';
import printGameResult from './printGameResult.js';
import getComputerInput from '../input/getComputerInput.js';



function createGamePage() {
  const main = document.querySelector('main');
  const gamePage = document.createElement('div');
  gamePage.setAttribute('class', 'game-page');
  gamePage.innerHTML = `
          <h2 class="game-page__title">
            ⚾ 숫자 야구
          </h2>
          <div class="inputs">
            <input type="text" class="firstNumber" maxlength='1' placeholder="첫번째 숫자">
            <input type="text" class="secondNumber" maxlength='1' placeholder="두번째 숫자">
            <input type="text" class="thirdNumber" maxlength='1' placeholder="세번째 숫자">
          </div>
          <div class="bord">
            <h4 class="bord__title">기록</h4>
            <div class="bord__records">
            </div>
          </div>
          <button type="submit" class="check__button">
            확인
          </button>
          `;
          main.append(gamePage);
          // <p class="record">1회 : 1볼</p>
          // <p class="record">2회 : 낫싱</p>
          // <p class="record">3회 : 1볼 1스트라이크</p>
          // <p class="record">4회 : 1볼 1스트라이크</p>
          // <p class="record">4회 : 1볼 1스트라이크</p>
          // <p class="record">4회 : 1볼 1스트라이크</p>
          // <p class="record">4회 : 1볼 1스트라이크</p>
          // <p class="record">4회 : 1볼 1스트라이크</p>
          // <p class="record">4회 : 1볼 1스트라이크</p>
};


function resetScreen() {
  const firstInput = document.querySelector('.firstNumber');
  const secondInput = document.querySelector('.secondNumber');
  const thirdInput = document.querySelector('.thirdNumber');

  firstInput.value = '';
  secondInput.value = '';
  thirdInput.value = '';
};


export default function playGame(computerInputNumbers, play) {
  const playBtn = document.querySelector('.play__button');
  const introPage = document.querySelector('.intro');

  playBtn.addEventListener('click', () => {
    introPage.remove();
    createGamePage();

    const checkButton = document.querySelector('.check__button');
  
    checkButton.addEventListener('click', () => {
      const userInputNumbers = getUserInput();
      printGameResult(play(computerInputNumbers, userInputNumbers));
      resetScreen();
    })
  });
};
