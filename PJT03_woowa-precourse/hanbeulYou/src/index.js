import makeComputerInput from "./input/makeComputerInput.js";
import playGame from "./game/playGame.js";
import getGameResult from "./game/getGameResult.js";


export default function BaseballGame() {
    const computerInputNumbers = makeComputerInput();
    const restartButton = document.getElementById('game-restart-button');
    console.log(computerInputNumbers)
    this.play = function (computerInputNumbers, userInputNumbers) {
        return getGameResult(computerInputNumbers, userInputNumbers);
    };

    restartButton.classList.add('hidden');
    playGame(computerInputNumbers, this.play);
}

new BaseballGame();
