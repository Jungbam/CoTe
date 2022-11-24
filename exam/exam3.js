// 5x5 2차원 배열이 주어질 때 어떤 원소가 상하좌우에 있는 원소보다 클 때 해당 위치에 * 을 표시하는 프로그램을 작성하세요.
// 경계선에 있는 수는 상하좌우 중 존재하는 원소만을 비교합니다.
const solution = () => {
  // arr1[0][0] => arr1[0][1], arr1[1][0]
  // arr1[0][1] => arr1[0][0], arr1[0][2], arr[1][1]
  // arr1[1][1] => arr1[0][1], arr1[1][0], arr[1][2], arr1[2][1]
  // 내가 비교해야할 값 : 5개구나.
  // arr1[i][j] => arr1[i-1][j], arr1[i][j-1], arr1[i][j+1], arr1[i+1][j]
  // 이 5개를 묶어서 비교해야겠다. => 배열.push()
  // 원본 : 비교하는 기준 => 배열[0]
  // 나머지 내가 비교해야되는 값들을 => 배열에 넣어야겠다.
  // 넣은 값중에 제일 큰 값이 원본 : 기준이 되는 값이면 *을 찍어줘야겠다.
  // 아니면 내가 입력받은 값을 찍어줘야겠다.
}
let arr1 = [
  [7, 4, 6, 5, 9],
  [6, 1, 3, 4, 5],
  [4, 8, 5, 6, 9],
  [1, 3, 0, 6, 4],
  [6, 4, 8, 1, 4],
]
solution(arr1)

function solution(arr1) {
  let answer = [[], [], [], [], []]
  let check = []
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      check.push(arr1[i][j])
      if (i - 1 >= 0) check.push(arr1[i - 1][j])
      if (j - 1 >= 0) check.push(arr1[i][j - 1])
      if (j + 1 < 5) check.push(arr1[i][j + 1])
      if (i + 1 < 5) check.push(arr1[i + 1][j])

      const arr2 = check.filter((el, index) => {
        return index !== 0
      })
      if (Math.max(...check) === check[0] && !arr2.includes(check[0])) {
        answer[i][j] = '*'
      } else {
        answer[i][j] = arr1[i][j]
      }
      check = []
    }
    console.log(...answer[i])
  }
}
