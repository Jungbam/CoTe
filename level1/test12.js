// 자릿수 더하기
function solution(n) {
  const a = String(n)
  let answer = 0
  for (i of a) {
    const b = +i
    answer += b
  }
  return answer
}
console.log(solution(2444))
