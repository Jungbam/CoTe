// 하샤드 수
function solution(x) {
  let answer = false
  const str = String(x)
  let num = 0
  for (i of str) {
    num += +i
    if (x % num === 0) {
      answer = true
    } else {
      answer = false
    }
  }
  return answer
}
solution(222)

// function solution(x) {
//   let answer = false
//   const str = String(x)
//   let num = 0
//   for (i of str) {
//     num += +i
//   }
// if (x % num === 0) {
//       answer = true
//     }
//   return answer
// }
