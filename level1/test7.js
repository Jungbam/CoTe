// 부족한 금액 계산하기
function solution(price, money, count) {
  let answer
  let total = 0
  for (let i = 1; i <= count; i++) {
    total = total + price * i
    console.log(total)
  }
  console.log(total)
  if (total > money) {
    answer = total - money
  } else {
    answer = 0
  }
  return answer
}
console.log(solution(3, 20, 4))
