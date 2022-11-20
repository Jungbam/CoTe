// const a = [[2, 1], [2, 4], 3]
// console.log(a[0]) // [2,1]
// console.log(a[1][0]) // 2
// console.log(a[1][1]) // 4
// console.log(a[2]) // 3

const a = (n = []) => {
  const bb = [[]]
  bb.push(n) // [ [], [ 1, 2 ] ]
  bb[0].push(n) //  [ [ [ 1, 2 ] ] ]
  console.log(bb)
}
a([1, 2])
