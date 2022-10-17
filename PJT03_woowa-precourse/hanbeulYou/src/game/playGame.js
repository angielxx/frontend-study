import getUserInput from "../input/getUserInput.js";
import printGameResult from "./printGameResult.js";

export default function playGame(computerInputNumbers, play) {
    const submit = document.getElementById('submit');

    submit.addEventListener('click', () => {
        event.preventDefault();
        const userInputNumbers = getUserInput();
        if (userInputNumbers) {
            console.log(computerInputNumbers);
            printGameResult(play(computerInputNumbers, userInputNumbers));
            // result.innerText = printGameResult(play(computerInputNumbers, userInputNumbers));
        }
    });
}