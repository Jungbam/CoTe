// 최소직각사각형

// 1. 먼저 사이즈의 각자를 정렬시킨다.(큰수가 앞으로 나오도록)
// 2. 각 앞자리와 뒷자리의 최대값을 골라서 곱하면 된다.
function solution(sizes) {
  const sortedArray = sizes.map((el) => el.sort((a, b) => b - a))
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
