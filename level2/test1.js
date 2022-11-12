// 혼자놀기의 달인

// 변수 선언 최소화
// 반복문 중첩 최소화

function solution(cards) {
  let answer = 0
  let answerAA = []

  for (let i = 0; i < cards.length; i++) {
    const a = i
    for (let j = 0; j < cards.length - i; j++) {
      const b = j
      for (let z = 0; z < cards.length - i - j; z++) {
        const c = z
        const answerArray = [a, b, c]
        answerArray.sort((a, b) => {
          return b - a
        })
        answer = answerArray[0] * answerArray[1]
        answerAA.push(answer)
      }
    }
  }

  answerAA.sort(function (a, b) {
    return b - a
  })
  answer = answerAA[0]
  return answer
}

// function solution(cards) {
//   var answer = 0

//   let open = new Array(cards.length)
//   console.log(open)
//   let group = []
//   for (let i = 0; i < cards.length; i++) {
//     if (open[i] != 1) {
//       let now = i
//       let count = 0

//       while (open[now] != 1) {
//         open[now] = 1
//         count++
//         now = cards[now] - 1
//       }
//       group.push(count)
//     }
//   }

//   let a = 0
//   let b = 0
//   for (let i = 0; i < group.length; i++) {
//     if (group[i] > a) a = group[i]
//     else if (group[i] > b) b = group[i]
//   }
//   answer = a * b

//   return answer
// }

console.log(solution([8, 6, 3, 7, 2, 5, 1, 4]))
