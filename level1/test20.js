// 콜라츠 추측
function solution(num) {
  let count = 0
  while (num != 1) {
    if (count < 500) {
      if (num % 2 === 0) {
        num /= 2
        count++
      } else if (num % 2 === 1) {
        num = num * 3 + 1
        count++
      }
    } else {
      return (count = -1)
    }
  }
  return count
}
console.log(solution(626331))
