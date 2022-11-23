const array = [1, 2, 3, 4, 5]

for (let i = 0; i < 5; i++) {
  console.log(array[i]) // 첫번째 돌 때는 1 두번째 돌때는 2...
}

// for문이 왜 생겼나?
// 반복하는 동작(생 노가다)를 하기 귀찮아서

const a = [1, 2, 3] // a[0] a[1] a[2]
const b = [4, 5, 6, 7]
const c = [8, 9, 0, 1, 2]
for (let i = 0; i < a.length; i++) {
  // 0                  1                2
  for (let j = 0; j < b.length; j++) {
    // 0   1   2   3   0  1  2  3  0
    for (let z = 0; z < c.length; z++) {
      // 0  0   0  0  0  0  0  0 
      // 1  1   1  1  1  1  1  1
      // 2  2   2  2  2  2  2  2
      // 3  3   3  3  3  3  3  3
      // 4  4   4  4  4  4  4  4
    }
  }
}
