// 문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다.
// str에 나타나는 숫자 중 소수의 최대값과 소수가 아닌 수의 최소값을 찾아
// 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.
// 예를들어 s가 "2 3 4 5"라면 "4 5"를 리턴하고, "15 3 10 9 7 8"라면 "8 7"을 리턴하면 됩니다.
// ### 제한사항
// - s에는 둘 이상의 정수가 공백으로 구분되어 있습니다.
// - 문자열에는 소수가 한개 이상 섞여 있습니다.
// - 문자열에는 소수가 아닌 수가 한개 이상 섞여 있습니다.
// - 음수는 없습니다.

// 희승님 생각
// s를 배열로 받아서
// 소수값을 걸러내고 수가 아닌값을 걸러내고
// 소수값 최대, 소수값 아닌 값 최소 리턴

function solution(s) {
  const array = s.split(' ')
  const sosu = []
  const sosuanim = []

  for (let i = 0; i < array.length; i++) {
    let yaksu = 0
    for (let j = 0; j <= array[i]; j++) {
      if (array[i] % j === 0) {
        yaksu++
      }
    }
    if (yaksu === 2) {
      sosu.push(array[i])
    } else {
      sosuanim.push(array[i])
    }
  }
  const choidae = Math.max(...sosu)
  const choiso = Math.min(...sosuanim)
  const answer = [choidae, choiso].join(',')
  return answer
}
const s = '15 3 10 9 7 8'
console.log(solution(s))

// function solution(s) {
//   const array = s.split(' ')
//   const sosuArray = []
//   const notSosuArray = []

//   for (i of array) {
//     const proof = []
//     for (let j = 0; j <= i; j++) {
//       if (i % j === 0) {
//         proof.push(j)
//       }
//     }
//     if (proof.length === 2) {
//       sosuArray.push(i)
//     } else {
//       notSosuArray.push(i)
//     }
//   }
//   const maxSosuNum = Math.max(...sosuArray)
//   const minNotSosuNum = Math.min(...notSosuArray)
//   const answer = [minNotSosuNum, maxSosuNum].join(',')
//   return answer
// }
// let s = '2 3 4 5'

// console.log(solution(s))
