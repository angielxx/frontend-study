import {printGameResult, restartBtn, result} from "./printGameResult.js";
import getUser from "../input/getUser.js";
import BaseballGame from "../index.js";

const userInput = document.getElementById('user-input');

function restartGame() {
  userInput.value = '';
  result.innerText = '';
  restartBtn.classList.add('hidden')
};

// 매개변수만 참고
export default function playGame(computer, play) {
  const userForm = document.getElementById('user-form');

  userForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (getUser(userInput.value)) {
      const user = getUser(userInput.value);
      printGameResult(play(computer, user))
    }
  })

  // 재시작 버튼 누르면 리셋
  restartBtn.addEventListener('click', (event) => {
    restartGame();
    // 인스턴스 새롭게 생성
    new BaseballGame();
  });
}