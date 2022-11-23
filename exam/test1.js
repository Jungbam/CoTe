//기원이는 오늘 항해99를 시작했다.
//성격이 급한 기원이는 항해 1일 차부터 언제 수료를 하게될 지 궁금하다.
//항해 1일 차 날짜를 입력하면 98일 이후 항해를 수료하게 되는
//날짜를 계산해주는 알고리즘을 만들어보자.
function solution(month, day) {
  const startDay = new Date('2022-' + month + '-' + day)
  const lastDay = new Date(startDay.setDate(startDay.getDate() + 98))
  const monthVal = lastDay.getMonth() + 1
  const dayVal = lastDay.getDate()
  let result = monthVal + '월' + dayVal + '일'
  return result
}
console.log(solution(11, 27))
