export function checkValidation(userNum) {
  // 입력한 숫자의 길이가 3이 아니면
  if (userNum.length !== 3) {
    return false;
  }
  // 숫자가 아니면
  if (Number.isNaN(Number(userNum))) {
    return false;
  }
  // 1-9까지인데 0을 포함하고 있으면
  if (userNum.includes(0)) {
    return false;
  }
  return true;
}