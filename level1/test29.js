// 문자열 정렬하기
function solution(strings, n) {
  const answer = [...strings]
    .sort(function (a, b) {
      if (a[n] === b[n]) {
        if (a > b) {
          return -1
        } else if (b > a) {
          return 1
        } else {
          return 0
        }
      } else {
        if (a[n] > b[n]) {
          return -1
        } else if (b[n] > a[n]) {
          return 1
        } else {
          return 0
        }
      }
    })
    .reverse()
  return answer
}
// 각 n번째 아이를 불러와서 비교하고 그걸 토대로 정렬시킨다.
// n번째가 같을 경우

solution(['cbce', 'bbcd', 'cdx'], 2)
