function solution(n) {
  const num = [...String(n)]
  // for문을 만들어서(인덱스가 있는 타입으로 바꾸겠다.=>
  // 배열, String) n 값의 숫자를 돌아가면서 인식을 시킨다.
  num.sort((a, b) => {
    return b - a
  })
  const numValue = num.join('')
  return Number(numValue)
}

console.log(solution(118372))
