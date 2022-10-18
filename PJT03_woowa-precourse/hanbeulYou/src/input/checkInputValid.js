// input값의 유효성 검사 함수
export default function checkInputValid(userInputArr) {
    if(!checkDuplicate(userInputArr) || !checkIsThreeNums(userInputArr) || !checkIsNaN(userInputArr)) {
        alert('Invalid Input!')
        return false;
    }
    return true;
}

// 중복값 확인
function checkDuplicate(userInputArr) {
    const unique = Array.from(new Set(userInputArr));
    if(userInputArr.length !== unique.length) return false;
    return true;
}

// 글자수 확인
function checkIsThreeNums(userInputArr) {
    if(userInputArr.length !== 3) return false
    return true
}

// 1-9까지의 숫자인지 확인
function checkIsNaN(userInputArr) {
    let flag = true;
    userInputArr.forEach(element => {
        if(isNaN(element)) flag = false;
        else if(element === '0') flag = false;
    });
    return flag;
}
