// 하샤드 수
function solution(x) {
  let answer = false
  const str = String(x)
  let num = 0
  for (i of str) {
    num += +i
    console.log(num)
    if (x % num === 0) {
      answer = true
    } else {
      answer = false
    }
  }
  return answer
}
solution(222)
