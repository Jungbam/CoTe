// 단어니까 String이겠다.
// String이니까 인덱스가 있겠다.
// 인덱스가 있으니까 중간값만 찾으면되겠다.
// String의 length를 검사해봐야겠다.
// 짝수면 두개 뽑고 홀수면 하나만 뽑아야겠다.

const solution = (a) => {
  let answer = ''
  if (a.length % 2 === 0) {
    answer += a[a.length / 2 - 1]
    answer += a[a.length / 2]
  } else {
    answer += a[Math.floor(a.length / 2)]
  }
  return answer
}

const a = 'abcddsf'
solution(a)
