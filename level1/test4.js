// 내적
function solution(a, b) {
  let answer = 0
  for (let i = 0; i < a.length; i++) {
    const value = a[i] * b[i]
    answer += value
  }
  return answer
}

const a = [1, 2, 3, 4]
const b = [-3, -1, 0, 2]
console.log(solution(a, b))
