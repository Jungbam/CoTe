// 최소직각사각형

// 1. 먼저 사이즈의 각자를 정렬시킨다.(큰수가 앞으로 나오도록)
// 2. 각 앞자리와 뒷자리의 최대값을 골라서 곱하면 된다.

// 여러개의 값을 묶어서 묶음 처리 => 배열
// 묶음한 애를 걸러야 된다. => 배열 => 필터
// 묶음한 애를 가지고 새로운 집단을 만들어야된다 => 맵
function solution(sizes) {
  sizes.map((el) => el.sort((a, b) => b - a))
  const processArray1 = []
  const processArray2 = []
  for (i of sizes) {
    processArray1.push(i[0])
    processArray2.push(i[1])
  }
  processArray1.sort((a, b) => b - a)
  processArray2.sort((a, b) => b - a)
  const answer = processArray1[0] * processArray2[0]

  return answer
}
const size = [
  [14, 4],
  [19, 6],
  [6, 16],
  [18, 7],
  [7, 11],
]

console.log(solution(size))
