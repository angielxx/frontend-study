import getUserInput from "../input/getUserInput.js";
import printGameResult from "./printGameResult.js";
import makeComputerInput from "../input/makeComputerInput.js";

export default function playGame(computerInputNumbers, play) {
    const submit = document.getElementById('submit');

    submit.addEventListener('click', () => {
        event.preventDefault();
        const userInputNumbers = getUserInput();
        console.log(userInputNumbers);
        if (userInputNumbers) {
            console.log(computerInputNumbers);
            printGameResult(play(computerInputNumbers, userInputNumbers));
            // result.innerText = printGameResult(play(computerInputNumbers, userInputNumbers));
            if (play(computerInputNumbers, userInputNumbers) === '정답입니다') {
                computerInputNumbers = makeComputerInput();
                console.log('new com :', computerInputNumbers)
            }
        }
    });
}