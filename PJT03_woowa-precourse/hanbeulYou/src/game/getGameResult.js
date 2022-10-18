function getStrikeCount(computerInputNumbers, userInputNumbers) {
    let cnt = 0;
    computerInputNumbers.forEach((number, index) => {
        if(number === userInputNumbers[index]) cnt++;
    });
    // console.log(`strike : ${cnt}`);
    return cnt;
}

function getBallCount(computerInputNumbers, userInputNumbers) {
    let cnt = 0;
    // console.log(userInputNumbers);
    computerInputNumbers.forEach((number, index) => {
        // console.log(number, index, userInputNumbers.includes(number));
        if(userInputNumbers.includes(number) && number !== userInputNumbers[index]) cnt++;
    });
    // console.log(`ball : ${cnt}`);
    return cnt;
}

export default function getGameResult(computerInputNumbers, userInputNumbers) {
    const strikeCount = getStrikeCount(computerInputNumbers, userInputNumbers);
    const ballCount = getBallCount(computerInputNumbers, userInputNumbers);

    // console.log(`b:${ballCount} s:${strikeCount}`);

    if(strikeCount === 3) return '정답입니다';
    if(!strikeCount && !ballCount) return '낫싱';
    if(ballCount && !strikeCount) return `${ballCount}볼`;
    if(!ballCount && strikeCount) return `${strikeCount}스트라이크`;
    if(ballCount && strikeCount) return `${ballCount}볼 ${strikeCount}스트라이크`;
}