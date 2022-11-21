// 숫자열과 문자열과 영단어
function solution(s) {
  let numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ]
  let answer = s

  for (let i = 0; i < numbers.length; i++) {
    let splitNUm = answer.split(numbers[i])
    answer = splitNUm.join(i)
  }

  return Number(answer)
}
console.log(solution('one4seveneight'))
