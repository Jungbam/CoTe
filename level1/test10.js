// 완주 못한 선수
function solution(participant, completion) {
  const a = participant.sort()
  const b = completion.sort()
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return a[i]
    }
  }
}

const participant = ['mislav', 'stanko', 'mislav', 'ana']
const completion = ['stanko', 'ana', 'mislav']
console.log(solution(participant, completion))

// function solution(participant, completion) {
//   for (j of completion) {
//     participant.splice(
//       participant.findIndex((el) => {
//         return el === j
//       }),
//       1,
//     )
//   }
//   return participant[0]
// }

// function solution(participant, completion) {
//   for (j of completion) {
//     const c = participant.findIndex((el) => el === j)
//     participant.splice(c, 1)
//   }
//   return participant[0]
// }
