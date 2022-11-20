// 대소문자
function solution(s) {
  let answer = ''
  let count = 1
  for (let i = 0; i < s.length; i++) {
    if (s[i] == ' ') {
      answer += ' '
      count = 1
    } else if (count % 2 === 1) {
      answer += s[i].toUpperCase()
      count += 1
    } else {
      answer += s[i].toLowerCase()
      count += 1
    }
  }

  return answer
}
s = 'hi baby wow'
console.log(solution(s))
