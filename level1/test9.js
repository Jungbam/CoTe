//박수박수문제
function solution(n) {
  let answer = ''
  let count = 0
  for (let i = 0; i < n; i++) {
    if (count % 2 === 1) {
      answer += '박'
    } else {
      answer += '수'
    }
    count += 1
  }
  return answer
}
solution(4)
