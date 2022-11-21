// 소수 찾기

function solution(n) {
  let answer = 0
  const value = Math.sqrt(n)
  const ab = new Array(n + 1).fill(0)

  // i는 루트값까지 반복할께.
  // 그 안에서 어떤 값의 곱을 제외할께.
  // 근데 그 곱은 루트값 이전의 값을 곱한걸 제외하면 나와.
  for (let i = 2; i <= value; i++) {
    if (ab[i] === 1) continue

    for (let z = 2; z <= n; z++) {
      if (i * z > n) continue
      ab[i * z] = 1
    }
  }
  for (let i = 2; i <= n; i++) {
    if (ab[i] === 0) {
      answer++
    }
  }
  return answer
}
console.log(solution(21))

// function solution(n) {
//   const answer = []
//   for (let i = 1; i <= n; i++) {
//     const a = []
//     for (let j = 1; j <= i; j++) {
//       if (i % j == 0) {
//         a.push(j)
//       }
//     }
//     if (a.length === 2) {
//       answer.push(i)
//     }
//   }
//   return answer.length
// }
