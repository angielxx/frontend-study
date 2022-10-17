// 모든 매개변수 computer, user은 배열

function strikeCount(computer, user) {
    let strike = 0;
    
    for (let i = 0; i < 3; i++) {
        if (user[i] === computer[i]) {
            strike++
        }
    };
    return strike;
}

// 볼 = 공통원소 - 스트라이크
function ballCount(computer, user) {
    const strike = strikeCount(computer, user)
    const commonArr = user.filter(x => computer.includes(x));
    const ball = commonArr.length - strike
    return ball;
}

// 반환 = gameResult
export default function getGameResult(computer, user) {
    let strike = strikeCount(computer, user)
    let ball = ballCount(computer, user)

    if (strike === 3) {
        return '정답';
    }
    if (!ball && !strike) {
        return '낫싱';
    }
    if (ball && !strike) {
        return `${ball} 볼`;
    }
    if (!ball && strike) {
        return `${strike} 스트라이크`;
    }
    if (ball && strike) {
        return `${ball} 볼, ${strike} 스트라이크`;
    }
}