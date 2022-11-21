// 3진법 뒤집기
function solution(n) {
  const value = parseInt([...n.toString(3)].reverse().join(''), 3)
  return value
}
solution(201)
