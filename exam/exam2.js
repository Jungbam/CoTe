// 다음 예제와 같이 삼각형 모양으로 ‘*’을 출력하세요.
// (공백의 개수와 별의 개수를 정확하게 확인해주시길 바랍니다. 🙆🏻‍♂️)

function solution(star) {
  for (let i = 0; i < star; i++) {
    let answer = ''
    for (let j = star - 1; j > i; j--) {
      answer += ' '
    }
    for (let j = 0; j <= i; j++) {
      answer += '*'
    }
    for (let j = 1; j <= i; j++) {
      answer += '*'
    }
    console.log(answer)
  }
}
let star = 5
solution(star)
