// 자연수 뒤집기
function solution(n) {
  const strN = String(n)
  var answer = [...strN].reverse().map((el) => Number(el))
  return answer
}
