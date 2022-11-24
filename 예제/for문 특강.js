// const array = [1, 2, 3, 4, 5]

// for (let i = 0; i < 5; i++) {
//   console.log(array[i]) // 첫번째 돌 때는 1 두번째 돌때는 2...
// }

// // for문이 왜 생겼나?
// // 반복하는 동작(생 노가다)를 하기 귀찮아서

// const a = [1, 2, 3] // a[0] a[1] a[2]
// const b = [4, 5, 6, 7]
// const c = [8, 9, 0, 1, 2]
// for (let i = 0; i < a.length; i++) {
//   // 0                  1                2
//   for (let j = 0; j < b.length; j++) {
//     // 0   1   2   3   0  1  2  3  0
//     for (let z = 0; z < c.length; z++) {
//       // 0  0   0  0  0  0  0  0
//       // 1  1   1  1  1  1  1  1
//       // 2  2   2  2  2  2  2  2
//       // 3  3   3  3  3  3  3  3
//       // 4  4   4  4  4  4  4  4
//     }
//   }
// // }

// const n = '456789' //
// // for (let i = n.length; i > 0; i--) {
// //   console.log(i)
// // }
// const answer = []
// // answer.push(n[5])
// // answer.push(n[4])
// // answer.push(n[3])
// // answer.push(n[2])
// // answer.push(n[1])
// // answer.push(n[0])
// for (let i = n.length - 1; i >= 0; i = i - 2) {
//   // 100점! 어? 나 근데 여기까지 잘했는데 왜 이거 만들었지?<= 진솔 브레인스톱
// //   answer.push(n[i])
// // }
// // console.log(answer)
// const n = '김진솔바보'
// // n[3] 바
// // n[4] 보
// for (let ㅎ = 3; ㅎ < 5; ㅎ++) {
//   console.log(n[ㅎ])
// }

// 포문
// const 포문 = ['123', '455', '123']
// for (let i = 0; i < 포문.length; i++) {
//   console.log(포문[i])
// }
// 2중for문이 생각날 때 볼거
const a = () => {
  const 변수 = ['123', '45345', '12312412']
  for (let i = 0; i < 변수.length; i++) {
    for (let j = 0; j < 변수[i].length; j++) {
      console.log(변수[i][j])
    }
  }
  return 1000
}
const b = a() // 글로벌이 불렀어요.
console.log(b)
//return 빵셔틀 // 일진 없어요. 빵셔틀 빵만 갖고있는거 줄사람이 없어요/
