//문자열 내림차순 정렬

function solution(s) {
  let ss = [...s]
  let dd = []
  for (i of ss) {
    if (i === i.toUpperCase()) {
      ss = ss.filter((el) => el !== i)
      dd.push(i)
    }
  }
  const a = ss.sort().reverse()
  const b = dd.sort().reverse()
  const c = [...a, ...b]
  let answer = ''
  for (i of c) {
    answer += i
  }
  return answer
}
const s = 'Zbcgegerefg'
console.log(solution(s))
