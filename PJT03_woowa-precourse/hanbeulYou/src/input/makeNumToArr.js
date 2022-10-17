import checkInputValid from "./checkInputValid.js";

// 입력 받은 값을 string -> array로 변경하는 함수
export default function makeNumToArr(userInputValue) {
    const myArr = userInputValue.split("");
    return myArr;
}