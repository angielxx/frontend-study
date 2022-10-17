import playGame from "./game/playGame.js"
import getGameResult from "./game/getGameResult.js";
import getCom from "./input/getCom.js";

// 함수 구조 참고
export default function BaseballGame() {
    const computer = getCom();
    console.log(computer)

    this.play = function (computer, user) {
        console.log(computer, user)
        console.log(getGameResult(computer, user))
        return getGameResult(computer, user);
    };

    playGame(computer, this.play)
  }

new BaseballGame();