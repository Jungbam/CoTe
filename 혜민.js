function solution(star) {
  // 코드 작성
  let row = ''
  let a = 0
  let b = 1
  for (let i = star; i > 0; i--) {
    // 3,2,1
    row += ' '.repeat(i) //
    row += '*'.repeat(b++)
    row += '*'.repeat(a++)
    row += '\n'
  }
  console.log(row)
}
let star = 9
solution(star)
