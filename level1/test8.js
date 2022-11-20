function solution(a, b) {
  const day = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU']
  let aa = new Date('2016-' + a + '-' + b)
  const bb = (aa - new Date('2016-01-01')) / (1000 * 60 * 60 * 24)

  const c = Math.ceil(bb % 7)
  const answer = day[c]
  return answer
}
// 입력 이 뭔지?
// 1.
// 2.
// 3.
// 출력이 뭔지?
// => 시간을 계산
console.log(solution(4, 2))
