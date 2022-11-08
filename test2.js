function solution(n) {
  answerList = []
  if (n < 3 || n >= 1000000) {
    return
  }
  for (let i = 0; i <= n; i++) {
    if (n % i === 1) {
      answerList.push(i)
    }
  }
  answer = answerList.sort((a, b) => a - b)[0]
  return answer
}
console.log(solution(11))
