import checkInputValid from "./checkInputValid.js";
import makeNumToArr from "./makeNumToArr.js";

export default function getUserInput() {
    const userInputValue = document.getElementById('user-input').value;
    const userInputStr = makeNumToArr(userInputValue);
    const userInputArr = [];

    if (!checkInputValid(userInputStr)) return false;
    userInputStr.forEach(element => {
        userInputArr.push(Number(element));
    });
    return userInputArr;
}