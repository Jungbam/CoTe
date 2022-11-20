function solution(n) {
  const strN = String(n)
  var answer = [...strN]
    .reverse()
    .map((el) => Number(el))
    .sort((a, b) => {
      return b - a
    })
  let result = ''
  for (i of answer) {
    result += i
  }
  return Number(result)
}
console.log(solution(12345))
