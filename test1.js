function solution(numbers = []) {
  let answer = 0
  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) {
      answer += i
    }
  }
  return answer
}
const numbers = [1, 2, 3, 4, 5, 6, 8, 9]
const answer = solution(numbers)
console.log(answer)
