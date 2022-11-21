// 두 개 뽑아서 더하기

function solution(numbers) {
  let answer = []

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j) {
        const nums = numbers[i] + numbers[j]
        if (!answer.includes(nums)) {
          answer.push(nums)
        }
      }
    }
  }
  return answer.sort((a, b) => {
    return a - b
  })
}

const numbers = [2, 1, 3, 4, 1]

console.log(solution(numbers))
