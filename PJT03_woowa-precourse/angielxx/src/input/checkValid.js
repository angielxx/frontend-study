export default function checkValid(userInput) {
    const userSet = new Set(userInput);
    const userArr = [...userSet];
    // 모두 숫자이며, 배열 길이가 3이라면 통과
    if (userArr.length === 3) {
        return true;
    } else {
        return false
    }
}