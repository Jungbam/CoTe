function solution(number) {
  let answer = 0
  // 배열 내에서 3개를 뽑아서 그걸로 배열 조합 만들기
  for (let i = 0; i < number.length - 2; i++) {
    for (let j = i + 1; j < number.length - 1; j++) {
      for (let z = j + 1; z < number.length; z++) {
        if (number[i] + number[j] + number[z] === 0) {
          answer += 1
        }
      }
    }
  }
  return answer
}
console.log(solution([-3, -2, -1, 0, 1, 2, 3]))
