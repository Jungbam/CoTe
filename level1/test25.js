function solution(answers) {
  let answer = [[], [], []]
  const Mems = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
  ]
  for (let j = 0; j < Mems.length; j++) {
    for (let i = 0; i < answers.length; i++) {
      if (i >= Mems[j].length - 1) {
        i = 0
        continue
      }
      if (Mems[j][i] === answers[i]) {
        answer[j].push(i)
      }
    }
  }
  const Value = [answer[0].length, answer[1].length, answer[2].length]

  return answer
}

const answers = [2, 1, 2, 3, 2, 4, 2, 5]
console.log(solution(answers))
