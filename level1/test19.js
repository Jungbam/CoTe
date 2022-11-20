function solution(arr) {
  if (arr.length > 1) {
    const a = Math.min(...arr)
    const num = arr.indexOf(a)
    arr.splice(num, 1)
  } else {
    arr = [-1]
  }
  return arr
}
console.log(solution([4, 2, 3, 1]))
