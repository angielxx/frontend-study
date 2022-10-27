// import MissionUtils from "@woowacourse/mission-utils";

export default function makeComputerInput() {
    const randomNumbers = [];
    while(true){
        if(randomNumbers.length === 3) break;
        const newNum = makeNewRandNum();
        if(randomNumbers.includes(newNum)) continue;
        randomNumbers.push(newNum);
    }
    // const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    console.log('random nums : ', randomNumbers);
    return randomNumbers;
}

function makeNewRandNum() {
    const randNum = MissionUtils.Random.pickNumberInRange(1, 9);
    return randNum;
}