// 모의고사
function solution(answers) {
  const answer = []
  const Mems = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ]

  for (let i = 0; i < 3; i++) {
    const result = answers.filter((e, index) => e === answer[index % i.length])
    console.log(result)
  }
  // const max = Math.max(a1c, a2c, a3c)

  // if (a1c === max) {
  //   answer.push(1)
  // }
  // if (a2c === max) {
  //   answer.push(2)
  // }
  // if (a3c === max) {
  //   answer.push(3)
  // }
  return answer
}
const answers = [1, 2, 3, 4, 5]
solution(answers)
