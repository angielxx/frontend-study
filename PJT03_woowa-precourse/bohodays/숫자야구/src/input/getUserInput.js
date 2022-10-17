import checkValidInput from './checkValidInput.js'

export default function getUserInput() {
  const firstNumber = document.querySelector('.firstNumber');
  const secondNumber = document.querySelector('.secondNumber');
  const thirdNumber = document.querySelector('.thirdNumber');
  const userInputNumbers = [firstNumber.value, secondNumber.value, thirdNumber.value].map((x) => Number(x));
  
  if (!checkValidInput(userInputNumbers)) {
    return false;
  }
  return userInputNumbers;
};