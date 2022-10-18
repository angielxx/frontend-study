import { checkValidation } from "./validation.js";
import { countBalls, countStrikes } from "./count.js";

export default class BaseballGame {
  // 기본 구조
  constructor() {
      this.submitButton = document.getElementById('submit');
      this.userInput = document.getElementById('user-input');
      this.result = document.getElementById('result');
      this.isCorrect = false;
      this.gameFinished = false;
      this.result.innerHTML = '';
      this.checkButtonClick();
      this.restartButtonClick();
      this.computerNum = this.answerNumbers();
  }

  // 랜덤으로 1-9까지의 숫자를 선택 (컴퓨터)
  answerNumbers() {
    let answer = new Array();
    while(answer.length !== 3) {
      const num = MissionUtils.Random.pickNumberInRange(1, 9);
      if(!answer.includes(num)) {
        answer.push(num);
      }
    }
    return answer;
  }

  // 확인 버튼을 눌렀을 때
  checkButtonClick() {
    this.submitButton.addEventListener('click', (e) => {
      e.preventDefault();
      const userNum = this.userInput.value;
      // user가 입력한 값이 유효하면
      if (checkValidation(userNum)) {
        this.resultMessage(this.play(this.computerNum, userNum));
      } else {
        alert('잘못된 값을 입력했습니다.');
      }
    });
  }

  play(computerNum, userNum) {
    const balls = countBalls(computerNum, userNum);
    const strikes = countStrikes(computerNum, userNum);
    if (balls === 0 && strikes === 0) {
      return '낫싱';
    } else if (strikes === 3) {
      this.isCorrect = true;
      return `<strong>🎉 정답을 맞추셨습니다! 🎉</strong>`;
    } else if (balls === 0) {
      return `${strikes}스트라이크`;
    } else if (strikes === 0) {
      return `${balls}볼`;
    }
    return `${balls}볼` `${strikes}스트라이크`;
  }

  // 결과 메시지
  resultMessage(resultText) {
    this.result.innerHTML = resultText;
    if (this.isCorrect && !this.gameFinished) {
      this.isCorrect = false;
      this.gameFinished = true;
      this.restartButtonClick();
    }
  }

  // 재시작 버튼을 눌렀을 때
  restartButtonClick() {
    const restartButton = document.getElementById('game-restart-button');
    restartButton.addEventListener('click', (e) => {
      this.userInput.value = '';
      new BaseballGame();
    });
  }
}

new BaseballGame();