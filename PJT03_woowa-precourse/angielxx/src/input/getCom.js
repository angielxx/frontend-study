export default function getCom(){
  let nums = [];
  while ([...nums].length < 3) {
    let num = Math.floor(Math.random() * 10);
    // 중복되는 숫자 방지
    if (! nums.includes(num) ) {
      nums.push(num);
    }
  }
  return nums
}