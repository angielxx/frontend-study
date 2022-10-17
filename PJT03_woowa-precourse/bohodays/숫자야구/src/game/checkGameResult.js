function checkGameResultText(strikeCount, ballCount) {
  if (strikeCount === 3) {
    return '정답';
  }
  if (strikeCount == 0 && ballCount === 0) {
    return '낫싱';
  }
  if (strikeCount == 0 && ballCount !== 0) {
    return `${ballCount}B`
  }
  if (strikeCount !== 0 && ballCount === 0) {
    return `${strikeCount}S`
  }
  if (strikeCount !== 0 && ballCount !== 0) {
    return `${ballCount}B ${strikeCount}S`
  }
}


function getStrikeCount(computerInputNumbers, userInputNumbers) {
  let cnt = 0
  for (let i = 0; i < 3; i++) {
    if (computerInputNumbers[i] === userInputNumbers[i]) {
      cnt += 1;
    }
  }
  return cnt;
};


function getBallCount(computerInputNumbers, userInputNumbers) {
  let cnt = 0
  for (let i = 0; i < 3; i++) {
    if (computerInputNumbers[i] !== userInputNumbers[i] && computerInputNumbers.includes(userInputNumbers[i])) {
      cnt += 1;
    }
  }
  return cnt;
};

export default function checkGameResult(computerInputNumbers, userInputNumbers) {
  const strikeCount = getStrikeCount(computerInputNumbers, userInputNumbers);
  const ballCount = getBallCount(computerInputNumbers, userInputNumbers)
  return checkGameResultText(strikeCount, ballCount)
}
