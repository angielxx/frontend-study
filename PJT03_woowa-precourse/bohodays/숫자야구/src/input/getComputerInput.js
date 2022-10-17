export default function getComputerInput() {
  const computerInputNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  return computerInputNumbers;
};
