// 없는 숫자 더하기
function solution(numbers = []) {
  let answer = 0
  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) {
      answer += i
    }
  }
  return answer
}
const numbers = [1, 2, 3, 4, 5, 6, 8, 9]
const answer = solution(numbers)
console.log(answer)

// for of 반복문은
// 배열의 length 만큼 도는데 돌때 i에 그 배열의 요소를 집어넣어요.answer
const array = [1, 2, 3]
for (let i; i < array.length; i++) {
  console.log(array[i])
}
for (item of array) {
  console.log(item)
}

// 대입 연산자(=) / 비교 연산자(===,==,<,>) => 불리언 값

function a(a, b = 2) {
  console.log(a)
}
a(1, 2)
// const a = 1
array = [1, 2, 3]
