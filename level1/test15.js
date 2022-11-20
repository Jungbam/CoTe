// 시저암호
function solution(s, n) {
  let answer = ''
  const stringArray = [...s]
  for (i of stringArray) {
    if (i === ' ') {
      answer += ' '
      continue
    }
    const numValu = i.charCodeAt()
    let numSt = i.charCodeAt() + n
    if (numValu >= 65 && numValu <= 90) {
      if (numSt > 90) {
        numSt -= 26
      }
    }
    if (numValu >= 97 && numValu <= 122) {
      if (numSt > 122) {
        numSt -= 26
      }
    }
    answer += String.fromCharCode(numSt)
  }
  return answer
}
console.log(solution('y', 1))
