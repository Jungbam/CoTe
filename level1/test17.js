// 같은 숫자는 싫어

function solution(arr) {
  let answer = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      answer.push(arr[i])
    }
  }
  return answer
}
console.log(solution([4, 4, 4, 3, 3]))
