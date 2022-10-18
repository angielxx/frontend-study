export function countBalls(computerNum, userNum) {
  // ball이 나온 개수 카운트
    let BallCount = 0;
    // reduce 인자값 : 누산기 (acc), 현재 값 (cur), 현재 인덱스 (idx), 원본 배열 (src)
    BallCount = computerNum.reduce((count, value, index) => {
    const userInputNum = Number(userNum[index]);
      // 현재 인덱스 값과 같진 않지만, userNum 배열에 들어있긴할 때
    if (userInputNum !== value && userNum.includes(value)) {
        return count + 1;
    } else {
        return count;
    }
    }, 0);
    return BallCount;
}

export function countStrikes(computerNum, userNum) {
    // strike가 나온 개수 카운트
    let StrikeCount = 0;
    StrikeCount = computerNum.reduce((count, value, index) => {
        const userInputNum = Number(userNum[index]);
        if (userInputNum === value) {
            return count + 1;
        } else {
            return count;
        }
    }, 0);
    return StrikeCount;
}