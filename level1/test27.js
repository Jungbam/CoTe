// 로또의 순위

// 1. 정답과 비교 => 답 비교 => 일치하는 갯수
// 2. 0의 갯수를 구함
// 3. 최소 : 일치하는 갯수 / 최대 : 일치하는 갯수 + 0의 갯수

function solution(lottos, win_nums) {
  const lanks = [6, 6, 5, 4, 3, 2, 1]
  let answer = 0
  let nums = 0
  for (i of lottos) {
    if (i === 0) {
      nums++
    }
    if (win_nums.includes(i)) {
      answer++
    }
  }
  return [lanks[answer + nums], lanks[answer]]
}

const lottos = [45, 4, 35, 20, 3, 9]
const win_nums = [20, 9, 3, 45, 4, 35]

console.log(solution(lottos, win_nums))
