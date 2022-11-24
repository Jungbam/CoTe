// 최솟값, 최댓값
function solution(s) {
  const string = s.split(' ')
  const array = [...string].sort((a, b) => {
    return a - b
  })
  const answer = [array[0], array[array.length - 1]]
  return answer.join(' ')
}
const s = '-1 -2 -3 -14'
console.log(solution(s))
