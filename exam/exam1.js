// 우리나라 고유의 윷놀이는 네 개의 윷짝을 던져서 배(0)와 등(1)이 나오는 숫자를 세어 도, 개, 걸, 윷, 모를 결정합니다.
// 네 개 윷짝을 던져서 나온 각 윷짝의 배 혹은 등 정보가 주어질 때 도(배 1개, 등 3개), 개(배 2개, 등 2개), 걸(배 3개, 등 1개), 윷(배 4개), 모(등 4개)
// 중 어떤 것인지를 결정하는 프로그램을 작성하세요.

// 0의 갯수에 따라서 도개걸윷 1이 전부인게 모

function solution(arr1) {
  return ['윷', '걸', '개', '도', '모'][arr1.reduce((a, e) => a + e)]
}

const solution = (arr1) => {
  let answer = 0
  let result = ['윷', '걸', '개', '도', '모']
  for (let i = 0; i < arr1.length; i++) {
    answer += arr1[i]
  }
  return result[answer]
}

let arr1 = [0, 0, 1, 1]

console.log(solution(arr1))
