import playGame from './game/playGame.js';
import checkGameResult from './game/checkGameResult.js';
import getComputerInput from './input/getComputerInput.js';

export default function BaseballGame() {
  const computerInputNumbers = getComputerInput();
  console.log(computerInputNumbers);
  this.play = function (computerInputNumbers, userInputNumbers) {
    return checkGameResult(computerInputNumbers, userInputNumbers);
  };
  
  playGame(computerInputNumbers, this.play);
};

new BaseballGame();

