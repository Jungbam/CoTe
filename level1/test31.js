// 포켓몬
function solution(nums) {
  let inMypoket = []
  const poket = [...nums].forEach((el) => {
    if (!inMypoket.includes(el)) {
      inMypoket.push(el)
    }
  })
  const myPoket = inMypoket.length
  if (nums.length / 2 > myPoket) {
    return myPoket
  } else {
    return Math.floor(nums.length / 2)
  }
}
console.log(solution([3, 3, 3, 2, 2, 2]))
